const express = require("express");
const router = express.Router();
const { ownRecipesAddSchema } = require("../../models/recipe");
const { validateBody } = require("../../utils");

const ownRecipesControllers = require("../../controllers/ownRecipes-controllers");

const {
  authentificate,
  uploadRecipe,
  isValidId,
  optimizeRequest,
  isValidIdRecipe,
} = require("../../middleWares");

router.post(
  "/",
  authentificate,
  uploadRecipe.single("preview"),
  optimizeRequest,
  validateBody(ownRecipesAddSchema),
  ownRecipesControllers.addOwnRecipe
);

router.get("/", authentificate, ownRecipesControllers.getOwnRecipes);

router.get(
  "/:id",
  authentificate,
  isValidId,
  isValidIdRecipe,
  ownRecipesControllers.getOwnRecipeById
);

router.delete(
  "/:id",
  authentificate,
  isValidId,
  ownRecipesControllers.deleteOwnRecipe
);

module.exports = router;
