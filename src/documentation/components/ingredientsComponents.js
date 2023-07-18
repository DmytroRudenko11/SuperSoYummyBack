const ingredientsComponents = {
  IngredientRequest: {
    type: "object",
    properties: {
      id: {
        type: "string",
        description: "id of ingredient",
        example: "640c2dd963a319ea671e372c",
      },
      measure: {
        type: "string",
        description: "amount and measure type",
        example: "1 spn",
      },
    },
  },
  IngredientResponse: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "ID of ingredient",
        example: "640c2dd963a319ea671e365b",
      },
      desc: {
        type: "string",
        description: "Description of ingr",
        example: "Very tasty",
      },
      ttl: {
        type: "string",
        description: "Name of ingr",
        example: "Chicken",
      },
      measure: {
        type: "string",
        description: "amount and measure of ingr",
        example: "300 g",
      },
      thb: {
        type: "string",
        description: "url of image",
        example:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/rw8pn3541bmukb8d3mio.png",
      },
    },
  },
  IngredientListResponse: {
    type: "array",
    items: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          example: "640c2dd963a319ea671e365c",
        },
        title: {
          type: "string",
          example: "Salmon",
        },
        thumb: {
          type: "string",
          example:
            "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678564123/bwzvxyjxozyankmd6ky8.png",
        },
      },
    },
  },
};

module.exports = ingredientsComponents;
