const subsRoutes = {
  "/api/subscribe": {
    post: {
      tags: ["Subscribe"],
      summary: "Subscribtion user on a newsletter",
      parameters: [],
      security: [{ Bearer: [] }],
      requestBody: {
        description: "susbcription of user",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/SubscribeRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Email send",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SubscribeResponse",
              },
            },
          },
        },
        401: { description: "Unauthorized" },
        404: {
          description: "Only registrated users can subscribe ",
        },
        409: {
          description: "User is subscribed already",
        },
        500: { description: "Server error" },
      },
    },
  },
  "/api/subscribe/{id}": {
    delete: {
      tags: ["Subscribe"],
      summary: "Unubscribtion user on a newsletter",
      security: [{ Bearer: [] }],
      parameters: [
        { in: "path", name: "id", required: "true", type: "string" },
      ],
      responses: {
        204: {
          description: "Unsubscribed",
        },
        404: {
          description: "This user is not subsribed / ID is not valid `",
        },
        500: { description: "Server error" },
      },
    },
  },
};

module.exports = subsRoutes;
