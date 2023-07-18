const popularRecipesComponents = {
  PopularRecipesResponse: {
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
        thumb: {
          type: "string",
          description: "Url of large image ",
          example:
            "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
        },
        time: {
          type: "string",
          description: "time of cooking",
          example: "30",
        },
        point: {
          type: "integer",
          description: "Rating of popularity",
          example: 30,
        },
      },
    },
  },
};

module.exports = popularRecipesComponents;
