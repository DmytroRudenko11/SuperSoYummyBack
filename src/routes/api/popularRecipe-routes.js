const express = require("express");
const router = express.Router();
const { authentificate } = require("../../middleWares");

const popularRecipeControllers = require("../../controllers/popularRecipe-controllers");

router.get("/", authentificate, popularRecipeControllers.getPopularRecipes);

module.exports = router;
