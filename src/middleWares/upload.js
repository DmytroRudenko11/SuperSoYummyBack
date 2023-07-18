const multer = require("multer");
const path = require("path");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("cloudinary").v2;

const { HttpError } = require("../helpers");

const { CLOUDINARY_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
  process.env;

cloudinary.config({
  cloud_name: CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const imageTypeFilter = (req, file, cb) => {
  const extention = file.originalname.split(".").pop();
  if (extention !== "jpg" && extention !== "png" && extention !== "jpeg") {
    cb(HttpError(400, "Unsupported file format"));
  }
  cb(null, true);
};

const sizeLimit = {
  fileSize: 1024 * 1024 * 5,
};

const storageRecipes = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "ownrecipe",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const storageAvatar = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "avatarsoyummy",
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});

const uploadRecipe = multer({
  storage: storageRecipes,
  limits: sizeLimit,
  fileFilter: imageTypeFilter,
});

const uploadAvatar = multer({
  storage: storageAvatar,
  limits: sizeLimit,
  fileFilter: imageTypeFilter,
});

module.exports = { uploadRecipe, uploadAvatar };
