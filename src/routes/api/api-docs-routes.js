const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../documentation");

const router = express.Router();

const { BASE_URL } = process.env;

const options = {
  explorer: true,
  swaggerOptions: {
    url: `${BASE_URL}/api-docs/swagger.json`,
  },
};

router.get("/swagger.json", (req, res) => res.json(swaggerDocument));

router.use("/", swaggerUi.serveFiles(null, options));
router.get("/", swaggerUi.setup(null, options));

module.exports = router;
