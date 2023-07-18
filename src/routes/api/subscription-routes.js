const express = require("express");
const router = express.Router();
const { userEmailSchema } = require("../../models/subscription");
const { validateBody } = require("../../utils");
const { authentificate } = require("../../middleWares");

const {
  subscription,
  unSubscribtion,
} = require("../../controllers/subscription-controllers");

router.post("/", authentificate, validateBody(userEmailSchema), subscription);

router.delete("/:id", authentificate, unSubscribtion);

module.exports = router;
