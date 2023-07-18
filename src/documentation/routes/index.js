const authRoutes = require("./authRoutes");
const subsRoutes = require("./subsRoutes");
const recipesCatListRoutes = require("./recipesCatListRoutes");
const ingredientsListRoutes = require("./ingredientsListRoutes");
const ownRecipesRoutes = require("./ownRecipesRoutes");
const recipesRoutes = require("./recipesRoutes");
const favoritesRoutes = require("./favoritesRoutes");
const searchRoutes = require("./searchRoutes");
const shoppingListRoutes = require("./shoppingListRoutes");
const popularRoutes = require("./popularRoutes");

module.exports = {
  paths: {
    ...authRoutes,
    ...subsRoutes,
    ...recipesCatListRoutes,
    ...ingredientsListRoutes,
    ...ownRecipesRoutes,
    ...recipesRoutes,
    ...favoritesRoutes,
    ...searchRoutes,
    ...shoppingListRoutes,
    ...popularRoutes,
  },
};
