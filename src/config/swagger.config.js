const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

function swaggerConfig(app) {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      info: {
        title: "Divar Application",
        description: "Divar Application with NodeJS, ExpressJs, MongoDB",
        version: "1.0.0",
      },
    },
    apis: [],
  });

  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/", swaggerUi.serve, swagger);
}

module.exports = {
    SwaggerConfig : swaggerConfig
}
