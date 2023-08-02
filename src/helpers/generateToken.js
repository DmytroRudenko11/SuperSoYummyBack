const jwt = require("jsonwebtoken");

const { ACCESS_SECRET_KEY, REFRESH_SECRET_KEY } = process.env;

const generateAccessToken = (payload) => {
  return jwt.sign(payload, ACCESS_SECRET_KEY, {
    expiresIn: "1h",
  });
};

const generateRefreshToken = (payload) => {
  return jwt.sign(payload, REFRESH_SECRET_KEY, {
    expiresIn: "5d",
  });
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
