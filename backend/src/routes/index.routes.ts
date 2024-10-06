import { Router } from "express";
import characterRouter from "./character.routes";
import planetRouter from "./planet.routes";
import transformationRouter from "./transformation.route";

const router = Router();

router.use("/api/characters", characterRouter);
router.use("/api/transformations", transformationRouter);
router.use("/api/planets", planetRouter);

export default router;
