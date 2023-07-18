const favoritesRoutes = {
  "/api/favorites": {
    get: {
      tags: ["Favorites"],
      summary: "List of favorite recipes",
      parameters: [
        {
          name: "page",
          in: "query",
          description: "Page, (default = 1)",
          schema: {
            type: "integer",
            minimum: 1,
            default: 1,
          },
        },
        {
          name: "limit",
          in: "query",
          description: "Per page(default 4)",
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
                $ref: "#/components/schemas/GetFavoriteResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request / Invalid page or limit value ",
        },
        401: { description: "Unauthorized" },
        404: {
          description: "Not found",
        },

        500: { description: "Server error" },
      },
    },
  },
  "/api/favorites/{id}": {
    patch: {
      tags: ["Favorites"],
      summary: "Toggle favorite recipe",
      security: [{ Bearer: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          description: "ID of Recipe",
          schema: {
            type: "string",
            example: "640cd5ac2d9fecf12e8897f7",
          },
        },
      ],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ToggleFavoriteResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request",
        },
        401: { description: "Unauthorized" },
        404: {
          description:
            "Not found / ID is not valid /Recipe with such ID is not found",
        },

        500: { description: "Server error" },
      },
    },
  },
};

module.exports = favoritesRoutes;
