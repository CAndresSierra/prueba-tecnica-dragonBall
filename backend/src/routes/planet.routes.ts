import { Router } from "express";
import * as planetCtrl from "../controllers/planet.controller";

const router = Router();

router.get("/", planetCtrl.getPlanets);
router.get("/:planetId", planetCtrl.getPlanetById);
router.put("/:planetId", planetCtrl.updatePlanetById);
router.delete("/:planetId", planetCtrl.deletePlanetById);

export default router;
