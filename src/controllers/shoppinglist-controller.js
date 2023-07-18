const { ObjectId } = require("mongodb");
const { User } = require("../models/user");

const { ctrlWrapper } = require("../utils");
const { HttpError } = require("../helpers");

const addProducts = async (req, res) => {
  const { _id: userId } = req.user;
  const { _id, measure, ttl, thb } = req.body;
  if (!_id || !measure || !ttl || !thb) {
    throw HttpError(400, "Require `_id, measure, ttl, thb` fields");
  }
  const { shoppingList } = await User.findByIdAndUpdate(
    userId,
    {
      $push: {
        shoppingList: { ...req.body, _id: new ObjectId() },
      },
    },
    { new: true }
  );

  res.status(201).json(shoppingList[shoppingList.length - 1]);
};

const deleteProducts = async (req, res) => {
  const { _id } = req.user;
  const { _id: ingrId } = req.body;

  const [list] = await User.find({ _id });

  const checkId = list.shoppingList.find((item) => item._id === ingrId);

  if (list.shoppingList.length === 0 || !checkId) {
    throw HttpError(404, `Product with _id=${ingrId} is not found`);
  }

  await User.findByIdAndUpdate(
    _id,
    {
      $pull: { shoppingList: { _id: ingrId } },
    },
    { new: true }
  );

  res.status(204).send();
};

const getAllProducts = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;
  if (page < 1 || limit < 1) {
    throw HttpError(400, "Invalid page or limit value");
  }

  const [result] = await User.aggregate([
    {
      $match: {
        _id: _id,
      },
    },
    {
      $project: {
        totalPages: {
          $ceil: {
            $divide: [{ $size: "$shoppingList" }, Number(limit)],
          },
        },
        data: {
          $slice: ["$shoppingList", Number(skip), Number(limit)],
        },
      },
    },
  ]);

  const totalPages = result.totalPages;
  const data = result.data;

  res.json({ totalPages, data });
};

module.exports = {
  addProducts: ctrlWrapper(addProducts),
  deleteProducts: ctrlWrapper(deleteProducts),
  getAllProducts: ctrlWrapper(getAllProducts),
};
