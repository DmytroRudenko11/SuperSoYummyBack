const recipesCatListRoutes = {
  "/api/recipes/category-list": {
    get: {
      tags: ["Category List"],
      summary: "List of available categories",
      parameters: [],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CategoryListResponse",
              },
            },
          },
        },
        401: { description: "Unauthorized" },

        500: { description: "Server error" },
      },
    },
  },
};

module.exports = recipesCatListRoutes;
