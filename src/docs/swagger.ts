import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Service Order API",
      version: "1.0.0",
      description: "API for managing users and service orders",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/routes/*.ts"], // você pode ajustar isso se quiser comentar nos controllers
};

const swaggerSpec = swaggerJsdoc(options);

export { swaggerUi, swaggerSpec };