import { Router } from "express";
import * as transfCtrl from "../controllers/transformation.controller";
const router = Router();

router.get("/", transfCtrl.getTransformations);
router.get("/:transfId", transfCtrl.getTransformationById);
router.put("/:transfId", transfCtrl.updateTransformationById);
router.delete("/:transfId", transfCtrl.deleteTransformationById);

export default router;
