const express = require("express");
const router = express.Router();
const { authentificate } = require("../../middleWares");

const searchControllers = require("../../controllers/search-controllers");

router.get("/", authentificate, searchControllers.getSearchRecipes);

module.exports = router;
