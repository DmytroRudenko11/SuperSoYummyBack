const { capitalizeString } = require("../helpers");

const optimizeRequest = (req, res, next) => {
  if (req.params.category) {
    req.params.category = capitalizeString(req.params.category);
  }

  if (req.body) {
    const { category, ingredients: string, isPublic } = req.body;
    if (string) {
      req.body.ingredients = JSON.parse(string);
    }

    if (category) {
      req.body.category = capitalizeString(category);
    }

    if (isPublic) {
      req.body.isPublic = JSON.parse(isPublic);
    }
  }

  next();
};

module.exports = optimizeRequest;
