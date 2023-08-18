const Joi = require("joi");
const { handleMongooseError } = require("../utils");
const { Schema, model } = require("mongoose");

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

const recipeSchema = new Schema(
  {
    title: {
      type: String,
    },
    category: {
      type: String,
    },
    area: {
      type: String,
    },
    instructions: {
      type: String,
    },
    description: {
      type: String,
    },
    thumb: {
      type: String,
    },
    preview: {
      type: String,
    },
    time: {
      type: String,
    },
    popularity: {
      type: Number,
    },
    favorites: {
      type: Array,
    },
    likes: {
      type: Array,
    },
    youtube: {
      type: String,
    },
    tags: {
      type: Array,
    },
    ingredients: {
      type: Array,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
    isPublic: {
      type: Boolean,
      default: false,
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
  isPublic: Joi.boolean(),
});

recipeIngredientSchema.post("save", handleMongooseError);

const Recipe = model("recipe", recipeSchema);

module.exports = { ownRecipesAddSchema, Recipe };
