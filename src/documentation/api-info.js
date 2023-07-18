const apiInfo = {
  openapi: "3.0.1",
  info: {
    version: "1.0.0",
    title: "SoYummy API Documentation",
    description: "Description of requests",
    license: {
      name: "MIT",
      url: "https://opensource.org/licenses/MIT",
    },
  },
  consumes: ["application/json", "multipart/form-data"],
  produces: ["application/json"],
  servers: [
    { url: "http://localhost:3001" },
    { url: "https://so-yummy-mg49.onrender.com" },
  ],
};

module.exports = apiInfo;
