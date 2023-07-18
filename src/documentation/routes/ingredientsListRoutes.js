const ingredientsListRoutes = {
  "/api/ingredients/list": {
    get: {
      tags: ["Ingredient List"],
      summary: "List of available ingredients",
      parameters: [],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/IngredientListResponse",
              },
            },
          },
        },
        400: { description: "Bad request" },
        401: { description: "Unauthorized" },
        500: { description: "Server error" },
      },
    },
  },
};

module.exports = ingredientsListRoutes;
