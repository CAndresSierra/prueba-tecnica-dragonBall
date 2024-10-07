//Middlewares
import express from "express";
import cors from "cors";
import morgan from "morgan";

//Routes
import indexRoutes from "./routes/index.routes";

//Swagger
import swaggerIU from "swagger-ui-express";
import specs from "./swagger/swagger";

const server = express();

server.use(express.json());
server.use("/api-docs", swaggerIU.serve, swaggerIU.setup(specs));
server.use(cors());
server.use(morgan("dev"));
server.use(indexRoutes);

export default server;
