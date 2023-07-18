const isValidId = require("./isValid");
const authentificate = require("./authentificate");
const { uploadRecipe, uploadAvatar } = require("./upload");
const optimizeRequest = require("./optimizeRequest");
const isValidCategory = require("./validateCategory");
const isValidIdRecipe = require("./isValidIdRecipe");
const passport = require("./google-authentificate");

module.exports = {
  isValidId,
  authentificate,
  uploadRecipe,
  uploadAvatar,
  optimizeRequest,
  isValidCategory,
  isValidIdRecipe,
  passport,
};
