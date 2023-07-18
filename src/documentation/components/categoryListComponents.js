const categoryListComponents = {
  CategoryListResponse: {
    type: "array",
    items: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Category name",
          example: "Beef",
        },
        _id: {
          type: "string",
          description: "User's id",
          example: "6478d1857194b94d73dc99ac",
        },
      },
    },
    example: [
      {
        category: "Beef",
        _id: "6478d1857194b94d73dc99ac",
      },
    ],
  },
};

module.exports = categoryListComponents;
