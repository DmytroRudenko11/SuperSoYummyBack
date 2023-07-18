const Category = require("../models/category");

const piplineRecipe = (categoryLimit, recipeLimit, category) => {
  const pipeline = [
    {
      $lookup: {
        from: "recipes",
        localField: "category",
        foreignField: "category",
        as: "recipes",
      },
    },
    {
      $addFields: {
        points: {
          $sum: {
            $map: {
              input: "$recipes",
              as: "obj",
              in: { $size: "$$obj.favorites" },
            },
          },
        },
      },
    },
    {
      $project: {
        points: 1,
        category: 1,
        recipes: 1,
      },
    },
    {
      $unwind: {
        path: "$recipes",
      },
    },
    {
      $sort: {
        "recipes.popularity": -1,
      },
    },
    {
      $group: {
        _id: "$_id",
        recipes: {
          $push: {
            _id: "$recipes._id",
            title: "$recipes.title",
            preview: "$recipes.preview",
            thumb: "$recipes.thumb",
            description: "$recipes.description",
            time: "$recipes.time",
          },
        },
        points: {
          $first: "$points",
        },
        category: {
          $first: "$category",
        },
      },
    },
    {
      $addFields: {
        recipes: {
          $slice: ["$recipes", 0, Number(recipeLimit)],
        },
      },
    },
    {
      $sort: {
        points: -1,
      },
    },
  ];

  if (categoryLimit) {
    pipeline.push({
      $limit: Number(categoryLimit),
    });
  }
  if (category) {
    pipeline.push({
      $match: { category },
    });
  }

  return pipeline;
};

const recipeCategoryServise = async ({
  categoryLimit,
  recipeLimit,
  category,
}) =>
  await Category.aggregate([
    ...piplineRecipe(categoryLimit, recipeLimit, category),
  ]);

module.exports = recipeCategoryServise;
