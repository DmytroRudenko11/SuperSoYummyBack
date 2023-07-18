const express = require("express");
const router = express.Router();
const { authentificate } = require("../../middleWares");

const ingredientListController = require("../../controllers/ingredientList-controller");

router.get("/list", authentificate, ingredientListController.getIngredientList);

module.exports = router;
