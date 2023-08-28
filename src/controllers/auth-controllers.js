const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const gravatar = require("gravatar");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("../helpers/generateToken");

const { ctrlWrapper, cloudinary } = require("../utils");
const { HttpError } = require("../helpers");
const { User } = require("../models/user");

const { FRONTEND_URL, REFRESH_SECRET_KEY } = process.env;

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

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  await User.findByIdAndUpdate(id, { accessToken, refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
  res.cookie("accessToken", accessToken, { httpOnly: true });

  if (accessToken) {
    res.setHeader("X-Has-AccessToken", "true");
  }

  res.status(201).json({
    // accessToken,
    // refreshToken,
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

  const accessToken = generateAccessToken(payload);
  const refreshToken = generateRefreshToken(payload);
  await User.findByIdAndUpdate(id, { accessToken, refreshToken });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
  res.cookie("accessToken", accessToken, { httpOnly: true });

  if (accessToken) {
    res.header("X-Has-AccessToken", "true");
  }

  res.json({
    // accessToken,
    // refreshToken,
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      avatarURL: user.avatarURL,
    },
  });
};

const refresh = async (req, res) => {
  // console.log(req.cookies);
  const { refreshToken = "" } = req.cookies;

  try {
    const { id } = jwt.verify(refreshToken, REFRESH_SECRET_KEY);

    const isExist = await User.findOne({ refreshToken });

    if (!isExist) {
      throw HttpError(403, "Invalid token");
    }

    const payload = {
      id,
    };

    const accessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);

    await User.findByIdAndUpdate(id, {
      accessToken,
      refreshToken: newRefreshToken,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
    });
    res.cookie("accessToken", accessToken, { httpOnly: true });

    res.status(201).json({ message: "refresh update" });
  } catch (error) {
    throw HttpError(403, error.message);
  }
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
  const { _id } = req.body;
  await User.findByIdAndUpdate(_id, { accessToken: "", refreshToken: "" });

  res.setHeader("X-Has-AccessToken", "false");

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

  const accessToken = generateAccessToken(id);
  await User.findByIdAndUpdate(id, { accessToken });
  res.redirect(
    `${FRONTEND_URL}?token=${accessToken}&name=${name}&email=${email}&avatarURL=${avatarURL}&_id=${id}`
  );
};

module.exports = {
  register: ctrlWrapper(register),
  login: ctrlWrapper(login),
  refresh: ctrlWrapper(refresh),
  getCurrent: ctrlWrapper(getCurrent),
  logout: ctrlWrapper(logout),
  updateUser: ctrlWrapper(updateUser),
  googleAuth,
};
