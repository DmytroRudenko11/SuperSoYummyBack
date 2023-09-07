const { ObjectId } = require("mongodb");
const { Recipe } = require("../models/recipe");
const { ctrlWrapper } = require("../utils");
const { HttpError } = require("../helpers");
const { cloudinary } = require("../utils");
const { recipeServise } = require("../helpers/recipeServise");
const { recipeListServise } = require("../helpers/recipeListService");

const addOwnRecipe = async (req, res) => {
  const { title, description, category, time, instructions, isPublic } =
    req.body;
  const { _id: owner } = req.user;
  const ingredients = req.body.ingredients.map((item) => {
    return { ...item, id: new ObjectId(item.id) };
  });

  let preview =
    "https://res.cloudinary.com/dcxlayslv/image/upload/v1692443730/ownrecipe/bvwsacbew2clghxuhte5.jpg";

  if (req.file) {
    const imageUrl = cloudinary.url(req.file.filename);
    preview = imageUrl;
  }

  const data = await Recipe.create({
    title,
    description,
    category,
    time,
    ingredients,
    preview,
    instructions,
    owner,
    isPublic,
  });

  res.status(201).json({
    _id: data._id,
    title: data.title,
    description: data.description,
    category: data.category,
    time: data.time,
    ingredients: data.ingredients,
    preview: data.preview,
    instructions: data.instructions,
  });
};

const getOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;
  if (page < 1 || limit < 1) {
    throw HttpError(400, "Invalid page or limit value");
  }

  const result = await recipeListServise("owner", owner, skip, limit, page);

  const { data, metaData: metaArray } = result[0];

  const metaData = metaArray[0];

  res.json({ metaData, data });
};

const deleteOwnRecipe = async (req, res) => {
  const deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);

  if (!deletedRecipe) {
    throw HttpError(404, `Recipe with id "${req.params.id}" is missing`);
  }
  res.status(204).send();
};

const getOwnRecipeById = async (req, res) => {
  const { id } = req.params;

  const [data] = await recipeServise({ id });

  res.json(data);
};

module.exports = {
  addOwnRecipe: ctrlWrapper(addOwnRecipe),
  getOwnRecipes: ctrlWrapper(getOwnRecipes),
  deleteOwnRecipe: ctrlWrapper(deleteOwnRecipe),
  getOwnRecipeById: ctrlWrapper(getOwnRecipeById),
};
