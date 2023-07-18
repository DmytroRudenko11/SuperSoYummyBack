const subsComponents = {
  SubscribeRequest: {
    type: "object",
    required: ["email"],
    properties: {
      email: {
        type: "string",
        description: "User's email",
        format: "email",
      },
    },
  },
};

module.exports = subsComponents;
