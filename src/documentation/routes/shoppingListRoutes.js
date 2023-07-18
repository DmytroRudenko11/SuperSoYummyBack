const shoppingListRoutes = {
  "/api/shopping-list": {
    get: {
      tags: ["Shopping List"],
      summary: "Get list of products, which you add",
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
            default: 10,
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
                $ref: "#/components/schemas/ShoppingListResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request / Invalid page or limit value",
        },
        401: { description: "Unauthorized" },
        404: {
          description: "Not found",
        },
        500: { description: "Server error" },
      },
    },
    post: {
      tags: ["Shopping List"],
      summary: "Get list of products, which you add",
      parameters: [],
      security: [{ Bearer: [] }],
      requestBody: {
        description: "Add items to buy ",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/AddItemtoBuy",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Success",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/ItemToBuy",
              },
            },
          },
        },
        400: {
          description: "Bad request / Require `id, measure, ttl, thb` fields",
        },
        401: { description: "Unauthorized" },
        404: {
          description: "Not found",
        },
        500: { description: "Server error" },
      },
    },
    delete: {
      tags: ["Shopping List"],
      summary: "Delete item from list of products to buy",
      parameters: [],
      security: [{ Bearer: [] }],
      requestBody: {
        description: "Id of item",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/DeleteItemtoBuy",
            },
          },
        },
      },
      responses: {
        204: {
          description: "Success",
        },
        400: {
          description: "Bad request",
        },
        401: { description: "Unauthorized" },
        404: {
          description: "Not found / Product with such ID is not found",
        },
        500: { description: "Server error" },
      },
    },
  },
};

module.exports = shoppingListRoutes;
