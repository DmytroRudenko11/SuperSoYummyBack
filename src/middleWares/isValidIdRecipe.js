const { HttpError } = require("../helpers");
const Recipe = require("../models/recipe");
const { OwnRecipe } = require("../models/ownRecipe");

const isValidIdRecipe = async (req, res, next) => {
  const { id, ownRecipeId } = req.params;
  const collection = id ? Recipe : OwnRecipe;
  const idReq = id ? id : ownRecipeId;
  const data = await collection.findOne({ _id: idReq });
  if (!data) {
    next(HttpError(404, `Recipe with id ${idReq} is not found`));
  }
  next();
};

module.exports = isValidIdRecipe;
