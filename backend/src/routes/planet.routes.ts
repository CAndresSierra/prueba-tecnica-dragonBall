import { Router } from "express";
import * as planetCtrl from "../controllers/planet.controller";

const router = Router();

router.get("/", planetCtrl.getPlanets);
router.get("/:planetId", planetCtrl.getPlanetById);
router.put("/:planetId", planetCtrl.updatePlanetById);
router.delete("/:planetId", planetCtrl.deletePlanetById);

/**
 * @swagger
 * tags:
 *   name: Planets
 *   description: API para manejar los planetas
 */

/**
 * @swagger
 * /api/planets:
 *   get:
 *     summary: Retorna la lista de planetas
 *     tags: [Planets]
 *     responses:
 *       200:
 *         description: Lista de planets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/OriginPlanetById'
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /api/planets/{id}:
 *   get:
 *     summary: Retorna un planeta por Id
 *     tags: [Planets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del planeta
 *     responses:
 *       200:
 *         description: El planeta ha sido retornado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OriginPlanetById'
 *       404:
 *         description: El planeta no fue encontrado
 *   put:
 *     summary: Actualiza cualquier propiedad o propiedades del planeta
 *     tags: [Planets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del planeta a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nuevo nombre
 *                 example: "Planeta 1"
 *               isDestroyed:
 *                 type: boolean
 *                 description: Si el planeta ha sido destruido o no
 *                 example: true
 *               description:
 *                 type: string
 *                 description: La nueva descripcion del planeta
 *                 example: "90 septillion"
 *               image:
 *                 type: string
 *                 description: La nueva imagen del planeta
 *                 example: "http://imagen.com"
 *
 *     responses:
 *       200:
 *         description: El planeta ha sido actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/OriginPlanet'
 *       404:
 *         description: El planeta no fue encontrado
 *   delete:
 *     summary: Elimina un planeta pasándole el Id
 *     tags: [Planets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del planeta
 *     responses:
 *       204:
 *         description: El planeta ha sido eliminado con éxito
 *       404:
 *         description: El planeta no fue encontrado
 */

export default router;
