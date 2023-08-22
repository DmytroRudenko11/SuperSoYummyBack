const { Recipe } = require("../models/recipe");

const generatePipeline = (matchQuery, owner, skip, limit, page) => {
  const pipeline = [
    {
      $match: {
        [matchQuery]: owner,
      },
    },
    {
      $facet: {
        metaData: [
          {
            $count: "totalHits",
          },
          {
            $addFields: {
              currentPage: page,
              totalPages: { $ceil: { $divide: ["$totalHits", limit] } },
            },
          },
        ],
        data: [
          { $skip: +skip },
          { $limit: +limit },
          {
            $project: {
              _id: 1,
              title: 1,
              category: 1,
              instructions: 1,
              description: 1,
              preview: 1,
              thumb: 1,
              time: 1,
              ingredients: 1,
              favorites: 1,
            },
          },
        ],
      },
    },
  ];

  return pipeline;
};

const recipeListServise = async (matchQuery, owner, skip, limit, page) =>
  await Recipe.aggregate([
    ...generatePipeline(matchQuery, owner, skip, limit, page),
  ]);

module.exports = {
  recipeListServise,
};
