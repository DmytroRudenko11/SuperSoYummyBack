const express = require("express");
const router = express.Router();
const { ownRecipesAddSchema } = require("../../models/ownRecipe");
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
  "/:ownRecipeId",
  authentificate,
  isValidId,
  isValidIdRecipe,
  ownRecipesControllers.getOwnRecipeById
);

router.delete(
  "/:ownRecipeId",
  authentificate,
  isValidId,
  ownRecipesControllers.deleteOwnRecipe
);

module.exports = router;
