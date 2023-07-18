const recipesMainPageComponent = {
  RecipeFromMainPage: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "Id of recipe",
        example: "640cd5ac2d9fecf12e8897fc",
      },
      title: {
        type: "string",
        description: "Title of recipe",
        example: "Spaghetti Bolognese",
      },
      preview: {
        type: "string",
        description: "Url of preview image",
        example:
          "https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg",
      },
      thumb: {
        type: "string",
        description: "Url of image",
        example:
          "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
      },
      description: {
        type: "string",
        description: "Brif descr of dish",
        example: "An Italian pasta dish",
      },
      time: {
        type: "string",
        description: "time of cooking",
        example: "45",
      },
    },
  },
  CatGroupMainPage: {
    type: "object",
    properties: {
      _id: {
        type: "string",
        description: "Id",
        example: "647c86459fec93f88e9aaa28",
      },
      recipes: {
        type: "array",
        items: {
          $ref: "#/components/schemas/RecipeFromMainPage",
        },
      },
      points: {
        type: "number",
        description: "Rating of popularity",
        example: 122,
      },
      category: {
        type: "integer",
        description: "time of cooking",
        example: "Beef",
      },
    },
  },
  MainPageResponse: {
    type: "array",
    items: {
      $ref: "#/components/schemas/CatGroupMainPage",
    },
  },
};

module.exports = recipesMainPageComponent;
