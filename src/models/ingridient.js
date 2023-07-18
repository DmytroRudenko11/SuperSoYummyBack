const { Schema, model } = require("mongoose")
const { handleMongooseError } = require("../utils")

const indredientSchema = new Schema(
  {
    ttl: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    thb: String,
  },
  { versionKey: false, timestamps: true }
)

indredientSchema.post("save", handleMongooseError)

const Ingredient = model("ingridient", indredientSchema)

module.exports = Ingredient
