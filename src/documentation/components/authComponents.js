const authComponents = {
  RegistrationRequest: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: {
        type: "string",
        description: "User's name",
        example: "testUser",
      },
      email: {
        type: "string",
        description: "User's email",
        format: "email",
      },
      password: {
        type: "string",
        description: "User's password",
        example: "qwerty123",
      },
    },
  },
  RegistrationResponse: {
    type: "object",
    properties: {
      token: {
        type: "string",
        description: "Bearer token",
        example: "string",
      },
      user: {
        _id: {
          type: "6478cd5a5a032b9b39bd7dab",
          description: "User's ID",
          example: "User's ID string",
        },
        name: {
          type: "string",
          description: "User's name",
          example: "testUser",
        },
        email: {
          type: "string",
          description: "User's email",
          format: "email",
        },
        avatarURL: {
          type: "string",
          example: "URL for avatar",
        },
      },
    },
    example: {
      token: "string",
      user: {
        _id: "6478cd5a5a032b9b39bd7dab",
        name: "testUser",
        email: "user@example.com",
        avatarURL: "url for avatar",
      },
    },
  },
  LoginRequest: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: {
        type: "string",
        description: "User's email",
        format: "email",
      },
      password: {
        type: "string",
        description: "User's password",
        example: "qwerty123",
      },
    },
  },
  LoginResponse: {
    type: "object",
    properties: {
      token: {
        type: "string",
        description: "Bearer token",
        example: "string",
      },
      user: {
        _id: {
          type: "6478cd5a5a032b9b39bd7dab",
          description: "User's ID",
          example: "User's ID string",
        },
        name: {
          type: "string",
          description: "User's name",
          example: "testUser",
        },
        email: {
          type: "string",
          description: "User's email",
          format: "email",
        },
        avatarURL: {
          type: "string",
          example: "URL for avatar",
        },
      },
    },
    example: {
      token: "string",
      user: {
        _id: "6478cd5a5a032b9b39bd7dab",
        name: "testUser",
        email: "user@example.com",
        avatarURL: "URL for avatar",
      },
    },
  },
  CurrentResponse: {
    type: "object",
    properties: {
      user: {
        _id: {
          type: "6478cd5a5a032b9b39bd7dab",
          description: "User's ID",
          example: "User's ID string",
        },
        name: {
          type: "string",
          description: "User's name",
          example: "testUser",
        },
        email: {
          type: "string",
          description: "User's email",
          format: "email",
        },
        avatarURL: {
          type: "string",
          example: "URL for avatar",
        },
      },
    },
    example: {
      user: {
        _id: "6478cd5a5a032b9b39bd7dab",
        name: "testUser",
        email: "user@example.com",
        avatarURL: "URL for avatar",
      },
    },
  },
  UpdateUserDataRequest: {
    type: "object",
    properties: {
      avatar: {
        type: "string",
        description: "uplodaded image ( png, jpg, jpeg )",
        format: "binary",
      },
      name: {
        type: "string",
        description: "Updated user's name",
        example: "testUserUPD",
      },
    },
  },
  UpdateUserDataResponse: {
    type: "object",
    properties: {
      data: {
        type: "object",
        properties: {
          avatarURL: {
            type: "string",
            example: "URL for avatar",
          },
          name: {
            type: "string",
            description: "User's name",
            example: "testUser",
          },
        },
      },
    },
    example: {
      data: {
        name: "testUser",
        avatarURL: "URL for image",
      },
    },
  },
};
module.exports = authComponents;
