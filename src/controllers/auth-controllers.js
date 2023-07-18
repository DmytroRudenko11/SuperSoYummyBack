const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const path = require("path");

const { ctrlWrapper, cloudinary } = require("../utils");
const { HttpError } = require("../helpers");
const { User } = require("../models/user");

const { SECRET_KEY, FRONTEND_URL } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "User with such Email already exist");
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);

  await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });

  const currentUser = await User.findOne({ email });
  const { _id: id } = currentUser;
  const payload = {
    id: currentUser._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "48h" });
  await User.findByIdAndUpdate(id, { token });
  res.status(201).json({
    token,
    user: {
      _id: currentUser._id,
      name: currentUser.name,
      email: currentUser.email,
      avatarURL: currentUser.avatarURL,
    },
  });
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    throw HttpError(401);
  }

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) {
    throw HttpError(401);
  }

  const { _id: id } = user;

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "48h" });
  await User.findByIdAndUpdate(id, { token });
  res.json({
    token,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
    },
  });
};

const getCurrent = async (req, res) => {
  const { name, email, avatarURL, _id } = req.user;

  res.json({
    user: {
      _id,
      name,
      email,
      avatarURL,
    },
  });
};

const logout = async (req, res) => {
  const { _id } = req.user;
  await User.findByIdAndUpdate(_id, { token: "" });

  res.json({
    message: "Logout success",
  });
};

const updateUser = async (req, res) => {
  const { name } = req.body;
  if (!name && !req.file) {
    throw HttpError(400, "Provide all necessary fields");
  }

  if (name) {
    req.user.name = name;
  }

  if (req.file) {
    const imageUrl = cloudinary.url(req.file.filename);
    req.user.avatarURL = imageUrl;
  }

  const data = {
    name: req.user.name,
    avatarURL: req.user.avatarURL,
  };

  await User.findByIdAndUpdate(req.user._id, data);

  res.json({
    data,
  });
};

const googleAuth = async (req, res) => {
  const { _id: id, name, email, avatarURL } = req.user;

  const payload = { id };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "48h" });
  await User.findByIdAndUpdate(id, { token });
  res.redirect(
    `${FRONTEND_URL}?token=${token}&name=${name}&email=${email}&avatarURL=${avatarURL}&_id=${id}`
  );
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateUser: ctrlWrapper(updateUser),
  googleAuth,
};
