const ownRecipesRoutes = {
  "/api/ownRecipes": {
    get: {
      tags: ["Own Recipes"],
      summary: "Creating user's own recipe",
      parameters: [
        {
          name: "page",
          in: "query",
          description: "Page number (default 1)",
          schema: {
            type: "integer",
            minimum: 1,
            default: 1,
          },
        },
        {
          name: "limit",
          in: "query",
          description: "Item per page(default 4)",
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
                $ref: "#/components/schemas/GetOwnRecipeResponse",
              },
            },
          },
        },
        400: { description: "Bad request / Invalid page or limit value" },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
    post: {
      tags: ["Own Recipes"],
      summary: "Creating user's own recipe",
      parameters: [],
      security: [{ Bearer: [] }],
      requestBody: {
        description: "Object with info regarding recipe",
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              $ref: "#/components/schemas/AddOwnRecipeRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Created",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AddOwnRecipeResponse",
              },
            },
          },
        },
        400: { description: "Bad request / Unsupported file format" },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
  },
  "/api/ownRecipes/{ownRecipeId}": {
    get: {
      tags: ["Own Recipes"],

      summary: "Get own recipe by ID",
      parameters: [
        {
          name: "ownRecipeId",
          in: "path",
          description: "Own recipe ID",
          required: true,
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
                $ref: "#/components/schemas/GetOwnRecipeByIDResponse",
              },
            },
          },
        },
        400: { description: "Bad request / Invalid page or limit value" },
        404: {
          description: "Recipe with id is missing",
        },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
    delete: {
      tags: ["Own Recipes"],
      summary: "Delete own recipe by ID",
      parameters: [
        {
          name: "ownRecipeId",
          in: "path",
          description: "Own recipe ID",
          required: true,
          schema: {
            type: "string",
          },
        },
      ],
      security: [{ Bearer: [] }],
      responses: {
        204: {
          description: "Deleted",
        },
        400: { description: "Bad request" },
        401: { description: "Unauthorized" },
        404: {
          description: 'Recipe with id "647c86459fec93f88e9aaa28" is missing',
        },
        500: { description: "Server error" },
      },
    },
  },
};

module.exports = ownRecipesRoutes;
