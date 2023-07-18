const shoppingListComponents = {
  ItemToBuy: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        example: "647ae6aae9cfb5491c1d9c19",
      },
      measure: {
        type: "string",
        example: "300g",
      },
      ttl: {
        type: "string",
        example: "Chicken",
      },
      thb: {
        type: "string",
        example:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png",
      },
    },
  },
  AddItemtoBuy: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        example: "647ae6aae9cfb5491c1d9c19",
      },
      measure: {
        type: "string",
        example: "300g",
      },
      ttl: {
        type: "string",
        example: "Chicken",
      },
      thb: {
        type: "string",
        example:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png",
      },
    },
  },
  ShoppingListResponse: {
    type: "object",
    properties: {
      totalPages: {
        type: "integer",
        example: 2,
      },
      data: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "user's Id",
            example: "647ae6aae9cfb5491c1d9c19",
          },
          shoppingList: {
            type: "array",
            items: { $ref: "#/components/schemas/ItemToBuy" },
          },
        },
      },
    },
  },
  DeleteItemtoBuy: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "ID of item to delete",
        example: "6480dfde2aea54c3a4c06952",
      },
    },
  },
};

module.exports = shoppingListComponents;
