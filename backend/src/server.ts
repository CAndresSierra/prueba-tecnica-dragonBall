import express from "express";
import cors from "cors";
import morgan from "morgan";
import indexRoutes from "./routes/index.routes";

const server = express();

server.use(express.json());
server.use(cors());
server.use(morgan("dev"));
server.use(indexRoutes);

export default server;
