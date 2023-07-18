const recipesRoutes = {
  "/api/recipes/main-page": {
    get: {
      tags: ["Recipes"],
      summary: "Recipes for main page",
      parameters: [
        {
          name: "categoryLimit",
          in: "query",
          description: "Number of requested categories (default 4)",
          schema: {
            type: "integer",
            minimum: 1,
            default: 4,
          },
        },
        {
          name: "recipeLimit",
          in: "query",
          description: "Number of requested recipes per category (default 4)",
          schema: {
            type: "integer",
            minimum: 1,
            default: 4,
          },
        },
      ],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MainPageResponse",
              },
            },
          },
        },
        400: {
          description:
            "Bad request / Invalid categoryLimit or recipeLimit query parameter",
        },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
  },
  "/api/recipes/category/{category}": {
    get: {
      tags: ["Recipes"],
      summary: "Get recipes by category",
      parameters: [
        {
          name: "recipeLimit",
          in: "query",
          description: "Limit of recipes you request by category (default 8)",
          schema: {
            type: "integer",
            minimum: 1,
            default: 8,
          },
        },
        {
          name: "category",
          in: "path",
          required: true,
          description: "Category that you request (ex. Beef)",
          schema: {
            type: "string",
          },
        },
      ],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MainPageResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request / Invalid recipeLimit parameter / ",
        },
        404: {
          description: "Not found / Category is not valid",
        },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
  },
  "/api/recipes/{id}": {
    get: {
      tags: ["Recipes"],
      summary: "Get single recipe by ID",
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of Recipe",
          schema: {
            type: "string",
            example: "640cd5ac2d9fecf12e8897fc",
          },
        },
      ],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RecibeByIdResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request / Invalid recipeLimit parameter ",
        },
        404: {
          description:
            "Not found / ID is not valid /Recipe with such ID is not found",
        },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
  },
};

module.exports = recipesRoutes;
