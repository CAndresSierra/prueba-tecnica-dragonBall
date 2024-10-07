import swaggerJsdoc from "swagger-jsdoc";
import { SERVER_URL } from "../config/envs";
import path from "path";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "prueba-tecnica-DbApi",
      version: "1.0.0",
      description:
        "Api para manejar personajes de dragon ball y sus deribados modelos como planetas etc.",
      contact: {
        name: "Camilo Sierra",
      },
      servers: [
        {
          url: SERVER_URL,
          description: "Local server",
        },
      ],
    },
  },
  apis: [`${path.join(__dirname, "../routes/*.ts")}`],
};

const specs = swaggerJsdoc(options);
export default specs;
