const { ctrlWrapper } = require("../utils");
const { Recipe } = require("../models/recipe");
const { HttpError } = require("../helpers");
const { recipeListServise } = require("../helpers/recipeListService");

const patchAddfavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { id: _id } = req.params;
  const condition = await Recipe.find({ favorites: { $in: [owner] }, _id });
  const func =
    condition.length === 0
      ? {
          $push: {
            favorites: owner,
          },
        }
      : {
          $pull: {
            favorites: owner,
          },
        };
  const result = await Recipe.findByIdAndUpdate(
    _id,
    func,

    { new: true }
  );
  res.status(201).json(result);
};

const getAllfavorite = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 4 } = req.query;
  const skip = (page - 1) * limit;
  if (page < 1 || limit < 1) {
    throw HttpError(400, "Invalid page or limit value");
  }

  const result = await recipeListServise("favorites", owner, skip, limit, page);

  const { data, metaData: metaArray } = result[0];

  const metaData = metaArray[0];

  res.json({ metaData, data });
};

module.exports = {
  patchAddfavorite: ctrlWrapper(patchAddfavorite),
  getAllfavorite: ctrlWrapper(getAllfavorite),
};
