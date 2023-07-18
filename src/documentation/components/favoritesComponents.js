const favoritesComponents = {
  ToggleFavoriteResponse: {
    type: "object",
    properties: {
      id: {
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
      area: {
        type: "string",
        description: "Area of dish",
        example: "Italian",
      },
      time: {
        type: "string",
        description: "time of cooking",
        example: "30",
      },
      instructions: {
        type: "string",
        description: "Instruction regarding procedures",
        example: "Bake 30 minutes",
      },
      preview: {
        type: "string",
        description: "url of preview image ",
        example:
          "http://res.cloudinary.com/dcxlayslv/image/upload/v1/ownrecipe/khzieh9fkxkrvyitgxa3",
      },
      thumb: {
        type: "string",
        description: "Url of large image ",
        example:
          "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
      },
      popularity: {
        type: "integer",
        description: "for BE use",
      },
      favorites: {
        type: "array",
        items: {
          type: "string",
          description: "array of ID's",
        },
      },
      likes: {
        type: "array",
        items: {
          type: "string",
          description: "array of ID's",
        },
      },
      youtube: {
        type: "string",
        example: "https://www.youtube.com/watch?v=-gF8d-fitkU",
      },
      tags: {
        type: "array",
      },
      ingredients: {
        type: "array",
        items: {
          $ref: "#/components/schemas/IngredientResponse",
        },
      },
    },
  },
  GetFavoriteResponse: {
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
            id: {
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
            area: {
              type: "string",
              description: "Area of dish",
              example: "Italian",
            },
            time: {
              type: "string",
              description: "time of cooking",
              example: "30",
            },
            instructions: {
              type: "string",
              description: "Instruction regarding procedures",
              example: "Bake 30 minutes",
            },
            preview: {
              type: "string",
              description: "url of preview image ",
              example:
                "http://res.cloudinary.com/dcxlayslv/image/upload/v1/ownrecipe/khzieh9fkxkrvyitgxa3",
            },
            thumb: {
              type: "string",
              description: "Url of large image ",
              example:
                "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
            },
            popularity: {
              type: "integer",
              description: "for BE use",
            },
            favorites: {
              type: "array",
              items: {
                type: "string",
                description: "array of ID's",
              },
            },
            likes: {
              type: "array",
              items: {
                type: "string",
                description: "array of ID's",
              },
            },
            youtube: {
              type: "string",
              example: "https://www.youtube.com/watch?v=-gF8d-fitkU",
            },
            tags: {
              type: "array",
            },
            ingredients: {
              type: "array",
              items: {
                $ref: "#/components/schemas/IngredientResponse",
              },
            },
          },
        },
      },
    },
  },
};

module.exports = favoritesComponents;
