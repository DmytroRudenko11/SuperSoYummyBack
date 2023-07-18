const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const categoryList = [
  "Beef",
  "Breakfast",
  "Chicken",
  "Dessert",
  "Goat",
  "Lamb",
  "Miscellaneous",
  "Pasta",
  "Pork",
  "Seafood",
  "Side",
  "Starter",
  "Vegan",
  "Vegetarian",
];

const recipeIngredientSchema = new Schema(
  {
    id: {
      type: Schema.Types.ObjectId,
      // ref: "ingridients",
      required: true,
    },
    measure: {
      type: String,
      required: true,
      default: "",
    },
  },
  { _id: false }
);

const ownRecipeSchema = new Schema(
  {
    title: {
      type: String,
      maxLength: 30,
      trim: true,
      required: [true, "Add title"],
    },
    description: {
      type: String,
      maxLength: 70,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      enum: {
        values: categoryList,
        message: `Category option is rescticted by options given in GET /api/recipes/category-list`,
      },
      required: true,
    },
    time: {
      type: String,
      trim: true,
      required: true,
    },
    ingredients: [recipeIngredientSchema],
    instructions: {
      type: String,
      maxLength: 400,
      trim: true,
      required: true,
    },
    preview: {
      type: String,
      // required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const ingredientSchema = Joi.object({
  id: Joi.string().required(),
  measure: Joi.string().required(),
});

const ownRecipesAddSchema = Joi.object({
  title: Joi.string().max(30).required().messages({
    "string.max": "30 characters length max",
    "any.required": "Title is required field",
  }),
  description: Joi.string().max(70).messages({
    "string.max": "70 characters length max",
    "any.required": "Description is required field",
  }),
  category: Joi.string()
    .valid(...categoryList)
    .required()
    .messages({
      "any.required":
        "Category option is rescticted by options given in GET /api/recipes/category-list",
    }),
  time: Joi.string().required(),
  ingredients: Joi.array().items(ingredientSchema),
  preview: Joi.any(),
  instructions: Joi.string().max(400).required().messages({
    "string.max": "400 characters length max",
    "any.required": "instructions is required field",
  }),
});

recipeIngredientSchema.post("save", handleMongooseError);

const OwnRecipe = model("ownRecipe", ownRecipeSchema);

module.exports = { ownRecipesAddSchema, OwnRecipe };
