const express = require("express");
const router = express.Router();
const { validateBody } = require("../../utils");
const { schemas } = require("../../models/user");
const { authentificate } = require("../../middleWares");

const shoppingList = require("../../controllers/shoppinglist-controller");

router.post(
  "/",
  authentificate,
  validateBody(schemas.userShoppingListSchema),
  shoppingList.addProducts
);

router.delete("/", authentificate, shoppingList.deleteProducts);

router.get("/", authentificate, shoppingList.getAllProducts);

module.exports = router;
