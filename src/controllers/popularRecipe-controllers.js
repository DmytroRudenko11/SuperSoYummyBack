const Recipe = require("../models/recipe");
const { ctrlWrapper } = require("../utils");
const { HttpError } = require("../helpers");

const getPopularRecipes = async (req, res) => {
  const { limit = 4 } = req.query;
  if (limit < 1) {
    throw HttpError(400, "Invalid limit parameter");
  }
  const result = await Recipe.aggregate([
    {
      $addFields: {
        points: {
          $size: "$favorites",
        },
      },
    },
    {
      $group: {
        _id: "$_id",
        title: { $first: "$title" },
        preview: { $first: "$preview" },
        thumb: { $first: "$thumb" },
        instructions: { $first: "$instructions" },
        description: { $first: "$description" },
        time: { $first: "$time" },
        points: {
          $first: "$points",
        },
      },
    },
    {
      $sort: {
        points: -1,
      },
    },
    {
      $limit: Number(limit),
    },
  ]);
  res.status(200).json(result);
};

module.exports = {
  getPopularRecipes: ctrlWrapper(getPopularRecipes),
};
