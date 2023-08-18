const { ObjectId } = require("mongodb");
const { Recipe } = require("../models/recipe");
const { ctrlWrapper } = require("../utils");
const { HttpError } = require("../helpers");
const { cloudinary } = require("../utils");
const { ownRecipeServise } = require("../helpers/recipeServise");

const addOwnRecipe = async (req, res) => {
  const { title, description, category, time, instructions, isPublic } =
    req.body;
  const { _id: owner } = req.user;
  const ingredients = req.body.ingredients.map((item) => {
    return { ...item, id: new ObjectId(item.id) };
  });

  let preview = "";

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
    title,
    description,
    category,
    time,
    ingredients,
    preview,
    instructions,
  });
};

const getOwnRecipes = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 4 } = req.query;
  if (page < 1 || limit < 1) {
    throw HttpError(400, "Invalid page or limit value");
  }

  const skip = (page - 1) * limit;
  const allData = await Recipe.find({ owner });
  const totalPages = Math.ceil(allData.length / limit);

  const data = await Recipe.aggregate([
    {
      $match: {
        owner,
      },
    },
    {
      $project: {
        preview: 1,
        title: 1,
        time: 1,
        description: 1,
        _id: 1,
      },
    },
    {
      $skip: Number(skip),
    },
    {
      $limit: Number(limit),
    },
  ]);

  res.json({ totalPages, data });
};

const deleteOwnRecipe = async (req, res) => {
  const deletedRecipe = await Recipe.findByIdAndRemove(req.params.ownRecipeId);

  if (!deletedRecipe) {
    throw HttpError(
      404,
      `Recipe with id "${req.params.ownRecipeId}" is missing`
    );
  }
  res.status(204).send();
};

const getOwnRecipeById = async (req, res) => {
  const { ownRecipeId } = req.params;

  const [data] = await ownRecipeServise({ ownRecipeId });

  res.json(data);
};

module.exports = {
  addOwnRecipe: ctrlWrapper(addOwnRecipe),
  getOwnRecipes: ctrlWrapper(getOwnRecipes),
  deleteOwnRecipe: ctrlWrapper(deleteOwnRecipe),
  getOwnRecipeById: ctrlWrapper(getOwnRecipeById),
};
