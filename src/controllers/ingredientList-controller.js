const { ctrlWrapper } = require("../utils");
const Ingredient = require("../models/ingridient");

const getIngredientList = async (req, res) => {
  const result = await Ingredient.aggregate([
    {
      $group: {
        _id: "$_id",
        title: { $first: "$ttl" },
        thumb: { $first: "$thb" },
      },
    },
  ]);
  res.status(200).json(result);
};

module.exports = {
  getIngredientList: ctrlWrapper(getIngredientList),
};
