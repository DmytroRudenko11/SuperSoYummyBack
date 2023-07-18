const authRoutes = {
  "/api/auth/google": {
    get: {
      tags: ["Auth"],
      summary: "User google registration/login request",
      parameters: [],

      responses: {
        400: {
          description: "Bad request ",
        },
        500: { description: "Server error" },
      },
    },
  },
  "/api/auth/register": {
    post: {
      tags: ["Auth"],
      summary: "User registration",
      parameters: [],

      requestBody: {
        description: "Registration's object",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/RegistrationRequest",
            },
          },
        },
      },
      responses: {
        201: {
          description: "User's registration passed successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/RegistrationResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request ",
        },
        409: {
          description: "User with such Email already exist",
        },
        500: { description: "Server error" },
      },
    },
  },
  "/api/auth/login": {
    post: {
      tags: ["Auth"],
      summary: "User login",
      parameters: [],
      requestBody: {
        description: "Login object",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "User is logged in",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginResponse",
              },
            },
          },
        },
        400: {
          description: "Bad request ",
        },
        401: {
          description: "Unauthorized",
        },
        500: { description: "Server error" },
      },
    },
  },
  "/api/auth/current": {
    get: {
      tags: ["Auth"],
      summary: "Get current user info",
      parameters: [],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CurrentResponse",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
        500: { description: "Server error" },
      },
    },
  },
  "/api/auth/logout": {
    post: {
      tags: ["Auth"],
      summary: "Logout user",
      parameters: [],
      security: [{ Bearer: [] }],
      responses: {
        200: {
          description: "User is logged out",
        },

        401: { description: "Unauthorized" },

        500: { description: "Server error" },
      },
    },
  },
  "/api/auth/edit": {
    patch: {
      tags: ["Auth"],
      summary: "Update of user's data",
      parameters: [],
      security: [{ Bearer: [] }],
      requestBody: {
        description: "Object with image and name",
        required: true,
        content: {
          "multipart/form-data": {
            schema: {
              $ref: "#/components/schemas/UpdateUserDataRequest",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Data updated",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/UpdateUserDataResponse",
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

module.exports = authRoutes;
