const popularRoutes = {
  "/api/popular-recipes": {
    get: {
      tags: ["Popular Recipes"],
      summary: "Get list of recipes sorted by popularity",
      parameters: [
        {
          name: "limit",
          in: "query",
          description: "Number of items to request (default 4)",
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
                $ref: "#/components/schemas/PopularRecipesResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request / Invalid limit parameter",
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

module.exports = popularRoutes;
