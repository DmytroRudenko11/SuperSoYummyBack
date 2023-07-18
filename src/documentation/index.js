const apiInfo = require("./api-info");
const apiTags = require("./api-tags");
const components = require("./components");
const routes = require("./routes");

module.exports = {
  ...apiInfo,
  ...apiTags,
  ...routes,
  ...components,
};
