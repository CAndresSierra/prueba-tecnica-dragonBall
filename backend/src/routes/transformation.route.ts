import { Router } from "express";
import * as transfCtrl from "../controllers/transformation.controller";
const router = Router();

router.get("/", transfCtrl.getTransformations);
router.get("/:transfId", transfCtrl.getTransformationById);
router.put("/:transfId", transfCtrl.updateTransformationById);
router.delete("/:transfId", transfCtrl.deleteTransformationById);

/**
 * @swagger
 * tags:
 *   name: Transformations
 *   description: API para manejar las transformaciones
 */

/**
 * @swagger
 * /api/transformations:
 *   get:
 *     summary: Retorna la lista de transformaciones
 *     tags: [Transformations]
 *     responses:
 *       200:
 *         description: Lista de transformaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transformation'
 *       500:
 *         description: Error del servidor
 */

/**
 * @swagger
 * /api/transformations/{id}:
 *   get:
 *     summary: Retorna una transformacion por Id
 *     tags: [Transformations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id de la transformacion
 *     responses:
 *       200:
 *         description: La transformacion ha sido retornado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TransformationById'
 *       404:
 *         description: La transformacion no fue encontrado
 *
 *   put:
 *     summary: Actualiza cualquier propiedad o propiedades de la transformacion
 *     tags: [Transformations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id de la transformacion a actualizar
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
 *                 example: "Goku SSY 4"
 *               ki:
 *                 type: string
 *                 description: El nuevo ki de la transformacion
 *                 example: "20 Billion"
 *               image:
 *                 type: string
 *                 description: La nueva imagen de la transformacion
 *                 example: "http://transfSSY.com"
 *
 *     responses:
 *       200:
 *         description: La transformacion ha sido actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transformation'
 *       404:
 *         description: La transformacion no fue encontrado
 *
 *   delete:
 *     summary: Elimina una transformacion pasándole el Id
 *     tags: [Transformations]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id de la transformacion
 *     responses:
 *       204:
 *         description: La transformacion ha sido eliminado con éxito
 *       404:
 *         description: La Transformacion no fue encontrado
 */

export default router;
