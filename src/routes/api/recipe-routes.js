const express = require("express");
const {
  authentificate,
  isValidId,
  isValidCategory,
  isValidIdRecipe,
  optimizeRequest,
} = require("../../middleWares");

const controllers = require("../../controllers/recipe-controller");
const categoryControllers = require("../../controllers/category-controllers");

const router = express.Router();

router.get(
  "/category-list",
  authentificate,
  categoryControllers.getListCategory
);

router.get("/main-page", authentificate, controllers.getMainPageRecipe);

router.get(
  "/:id",
  authentificate,
  isValidId,
  isValidIdRecipe,
  controllers.getRecipeById
);

router.get(
  "/category/:category",
  authentificate,
  optimizeRequest,
  isValidCategory,
  controllers.getCategoryRecipe
);

module.exports = router;
