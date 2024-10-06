import { Router } from "express";
import * as characterCtrl from "../controllers/characters.controller";
const router = Router();

router.get("/", characterCtrl.getCharacters);
router.get("/:characterId", characterCtrl.getCharacterById);
router.post("/", characterCtrl.createCharacter);
router.put("/:characterId", characterCtrl.updateCharacterById);
router.delete("/:characterId", characterCtrl.deleteCharacterById);

export default router;
