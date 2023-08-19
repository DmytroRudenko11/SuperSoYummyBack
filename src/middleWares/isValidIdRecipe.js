const { HttpError } = require("../helpers");
const { Recipe } = require("../models/recipe");

const isValidIdRecipe = async (req, res, next) => {
  const { id } = req.params;

  const data = await Recipe.findOne({ _id: id });
  if (!data) {
    next(HttpError(404, `Recipe with id ${idReq} is not found`));
  }
  next();
};

module.exports = isValidIdRecipe;
