const { HttpError } = require("../helpers");
const Recipe = require("../models/recipe");

const isValidCategory = async (req, res, next) => {
  const { category } = req.params;
  const data = await Recipe.findOne({ category: category });
  if (!data) {
    next(HttpError(404, `${category} is not valid category`));
  }
  next();
};

module.exports = isValidCategory;
