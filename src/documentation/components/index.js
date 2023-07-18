const authComponents = require("./authComponents");
const subsComponents = require("./subsComponents");
const categoryListComponents = require("./categoryListComponents");
const ownRecipeComponents = require("./ownRecipeComponents");
const ingredientsComponents = require("./ingredientsComponents");
const recipesMainPageComponent = require("./recipesMainPageComponent");
const recipeByIdComponents = require("./recipeByIdComponents");
const favoritesComponents = require("./favoritesComponents");
const shoppingListComponents = require("./shoppingListComponents");
const popularRecipesComponents = require("./popularRecipesComponents");

module.exports = {
  components: {
    schemas: {
      ...authComponents,
      ...subsComponents,
      ...categoryListComponents,
      ...ownRecipeComponents,
      ...ingredientsComponents,
      ...recipesMainPageComponent,
      ...recipeByIdComponents,
      ...favoritesComponents,
      ...shoppingListComponents,
      ...popularRecipesComponents,
    },
    securitySchemes: {
      Bearer: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};
