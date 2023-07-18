const ownRecipeComponents = {
  AddOwnRecipeRequest: {
    type: "object",
    // required: [
    //   "title",
    //   "description",
    //   "category",
    //   "time",
    //   "ingredient",
    //   "instructions",
    // ],
    properties: {
      title: {
        type: "string",
        description: "title of recipe",
        example: "Pizza",
      },
      description: {
        type: "string",
        description: "Brief description of dish",
        example: "Italian cuisine",
      },
      category: {
        type: "string",
        description:
          'One of this: "Beef","Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"',
        example: "Miscellaneous",
      },
      time: {
        type: "sting",
        description: "time of cooking",
        example: "30",
      },
      ingredients: {
        type: "string",
        description:
          "Array of objects, which includes id's and measures of ingredient",
        example: `[{"id":"640c2dd963a319ea671e365b", "measure":"5 spoon"}]`,
      },
      instructions: {
        type: "string",
        description: "Cooking instructions",
        example: "bake 15 minutes",
      },
      preview: {
        type: "string",
        description: "uploaded image (png, jpg, jpeg)",
        format: "binary",
      },
    },
  },
  AddOwnRecipeResponse: {
    type: "object",
    properties: {
      title: {
        type: "string",
        description: "title of recipe",
        example: "Pizza",
      },
      description: {
        type: "string",
        description: "Brief description of dish",
        example: "Italian cuisine",
      },
      category: {
        type: "string",
        description:
          'One of this: "Beef","Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"',
        example: "Miscellaneous",
      },
      time: {
        type: "string",
        description: "time of cooking",
        example: "30",
      },
      ingredient: {
        type: "array",
        items: {
          $ref: "#/components/schemas/IngredientRequest",
        },
      },
      instructions: {
        type: "string",
        description: "Cooking instructions",
        example: "bake 15 minutes",
      },
      preview: {
        type: "string",
        description: "uploaded image (png, jpg, jpeg)",
        example: "url string",
      },
    },
    example: {
      title: "Pizza",
      description: "Miscellaneous",
      category: "Miscellaneous",
      time: "30",
      ingredients: [
        {
          id: "640c2dd963a319ea671e365b",
          measure: " 5 spn",
        },
        {
          id: "640c2dd963a319ea671e365b",
          measure: " 5 spn",
        },
      ],
      preview:
        "http://res.cloudinary.com/dcxlayslv/image/upload/v1/ownrecipe/duuq0zozan84bqffgirk",
      instructions: "bake 15 minutes",
    },
  },
  GetOwnRecipeResponse: {
    type: "object",
    properties: {
      totalPages: {
        type: "integer",
        example: 2,
      },
      data: {
        type: "array",
        items: {
          type: "object",
          properties: {
            _id: {
              type: "string",
              description: "Id of the recipe",
              example: "647c86459fec93f88e9aaa28",
            },
            title: {
              type: "string",
              description: "title of recipe",
              example: "Pizza",
            },
            description: {
              type: "string",
              description: "Brief description of dish",
              example: "Italian cuisine",
            },
            time: {
              type: "string",
              description: "time of cooking",
              example: "30",
            },
            preview: {
              type: "string",
              description: "url of image ( if it not provided - empty string",
              example:
                "http://res.cloudinary.com/dcxlayslv/image/upload/v1/ownrecipe/khzieh9fkxkrvyitgxa3",
            },
          },
        },
      },
    },
  },
  GetOwnRecipeByIDResponse: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "Id of the recipe",
        example: "647c86459fec93f88e9aaa28",
      },
      title: {
        type: "string",
        description: "title of recipe",
        example: "Pizza",
      },
      description: {
        type: "string",
        description: "Brief description of dish",
        example: "Italian cuisine",
      },
      category: {
        type: "string",
        description: "Category of dish",
        example: "Miscellaneous",
      },
      time: {
        type: "string",
        description: "time of cooking",
        example: "30",
      },
      ingredients: {
        type: "array",
        items: {
          $ref: "#/components/schemas/IngredientResponse",
        },
      },
      instructions: {
        type: "string",
        description: "Instruction regarding procedures",
        example: "Bake 30 minutes",
      },
      preview: {
        type: "string",
        description: "url of image ( if it not provided - empty string",
        example:
          "http://res.cloudinary.com/dcxlayslv/image/upload/v1/ownrecipe/khzieh9fkxkrvyitgxa3",
      },
    },
  },
};

module.exports = ownRecipeComponents;
