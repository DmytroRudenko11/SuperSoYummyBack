const jwt = require("jsonwebtoken");
const { HttpError } = require("../helpers");
const { ACCESS_SECRET_KEY } = process.env;
const { User } = require("../models/user");

const authentificate = async (req, res, next) => {
  const { accessToken = "" } = req.cookies;
  // const [bearer, token] = authorization.split(" ");
  // if (bearer !== "Bearer") {
  //   next(HttpError(401));
  // }

  try {
    const { id } = jwt.verify(accessToken, ACCESS_SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.accessToken) {
      next(HttpError(401));
    }

    if (user) {
      res.setHeader("X-Has-AccessToken", "true");
      req.user = user;
    }

    next();
  } catch {
    next(HttpError(401));
  }
};

module.exports = authentificate;
