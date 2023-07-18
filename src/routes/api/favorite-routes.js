const express = require("express");
const router = express.Router();
const {
  authentificate,
  isValidId,
  isValidIdRecipe,
} = require("../../middleWares");

const favoriteList = require("../../controllers/favorite-controller");

router.patch(
  "/:id",
  authentificate,
  isValidId,
  isValidIdRecipe,
  favoriteList.patchAddfavorite
);

router.get("/", authentificate, favoriteList.getAllfavorite);

module.exports = router;
