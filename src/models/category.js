const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");

const categorySchema = new Schema({ category: String });

categorySchema.post("save", handleMongooseError);

const Category = model("category", categorySchema);

module.exports = Category;
