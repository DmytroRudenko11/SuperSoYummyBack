const { Schema, model } = require("mongoose");
const { handleMongooseError } = require("../utils");
const Joi = require("joi");

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const subscriptionSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      match: emailRegex,
      unique: true,
    },
    subscriberName: {
      type: String,
    },
    subscriberId: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false, timestamps: true }
);

subscriptionSchema.post("save", handleMongooseError);

const userEmailSchema = Joi.object({
  email: Joi.string().pattern(emailRegex).required().messages({
    "string.email": "Email must be a valid email",
  }),
});

const Subscription = model("subscription", subscriptionSchema);

module.exports = { userEmailSchema, Subscription };
