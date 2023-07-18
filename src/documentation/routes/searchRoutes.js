const searchRoutes = {
  "/api/search": {
    get: {
      tags: ["Search"],
      summary: "Search recipes by name/by ingredient name",
      parameters: [
        {
          name: "title",
          in: "query",
          description: "title of recipe to be searched",
          schema: {
            type: "string",
            example: "Potato Gratin",
          },
        },
        {
          name: "ingredient",
          in: "query",
          description: "Name of ingredient that recipes should include",
          schema: {
            schema: {
              type: "string",
              example: "Chiken",
            },
          },
        },
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
          description: "Per page(default 12)",
          schema: {
            type: "integer",
            minimum: 1,
            default: 12,
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
                type: "object",
                properties: {
                  totalPages: {
                    type: "integer",
                    example: 2,
                  },
                  data: {
                    type: "array",
                    items: {
                      $ref: "#/components/schemas/ToggleFavoriteResponse",
                    },
                  },
                },
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
};

module.exports = searchRoutes;
