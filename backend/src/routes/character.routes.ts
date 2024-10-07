import { Router } from "express";
import * as characterCtrl from "../controllers/character.controller";
const router = Router();

router.get("/", characterCtrl.getCharacters);
router.get("/:characterId", characterCtrl.getCharacterById);
router.post("/", characterCtrl.createCharacter);
router.put("/:characterId", characterCtrl.updateCharacterById);
router.delete("/:characterId", characterCtrl.deleteCharacterById);

/**
 * @swagger
 * components:
 *   schemas:
 *     TransformationById:
 *       type: object
 *       required:
 *         - name
 *         - ki
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre de la transformación
 *         ki:
 *           type: string
 *           description: El nivel de Ki en la transformación
 *         image:
 *           type: string
 *           description: Imagen de la transformación
 *         character:
 *           $ref: '#/components/schemas/Character'
 *
 *
 *     Transformation:
 *       type: object
 *       required:
 *         - name
 *         - ki
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre de la transformación
 *         ki:
 *           type: string
 *           description: El nivel de Ki en la transformación
 *         image:
 *           type: string
 *           description: Imagen de la transformación
 *         character:
 *           type: string
 *           description: Id del personaje
 *
 *
 *
 *     OriginPlanetById:
 *       type: object
 *       required:
 *         - name
 *         - isDestroyed
 *         - description
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre del planeta de origen
 *         isDestroyed:
 *           type: boolean
 *           description: Si el planeta ha sido destruido
 *         description:
 *           type: string
 *           description: Descripción del planeta
 *         image:
 *           type: string
 *           description: Imagen del planeta
 *         characters:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Character'
 *
 *     OriginPlanet:
 *       type: object
 *       required:
 *         - name
 *         - isDestroyed
 *         - description
 *         - image
 *       properties:
 *         name:
 *           type: string
 *           description: El nombre del planeta de origen
 *         isDestroyed:
 *           type: boolean
 *           description: Si el planeta ha sido destruido
 *         description:
 *           type: string
 *           description: Descripción del planeta
 *         image:
 *           type: string
 *           description: Imagen del planeta
 *         characters:
 *           type: array
 *           items:
 *             type: string
 *             description: Id de el personaje
 *
 *     CharacterById:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - ki
 *         - maxKi
 *         - race
 *         - gender
 *         - description
 *         - image
 *         - affiliation
 *         - originPlanet
 *         - transformations
 *       properties:
 *         id:
 *           type: string
 *           description: El Id auto generado
 *         name:
 *           type: string
 *           description: El nombre del personaje
 *         ki:
 *           type: string
 *           description: El nivel de Ki del personaje
 *         maxKi:
 *           type: string
 *           description: El nivel máximo de Ki del personaje
 *         race:
 *           type: string
 *           description: La raza del personaje
 *         gender:
 *           type: string
 *           description: El género del personaje
 *         description:
 *           type: string
 *           description: Descripción del personaje
 *         image:
 *           type: string
 *           description: Imagen del personaje
 *         affiliation:
 *           type: string
 *           description: El grupo o afiliación del personaje
 *         originPlanet:
 *           $ref: '#/components/schemas/OriginPlanetById'
 *         transformations:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/TransformationById'
 *       example:
 *         id: "6701ef2528a40b03937e53ea"
 *         name: "goku"
 *         ki: "60.000.000"
 *         maxKi: "90 septillion"
 *         race: "saiyan"
 *         gender: "male"
 *         description: "El protagonista de la serie, conocido por su gran poder y personalidad amigable"
 *         image: "https://dragonball-api.com/characters/goku_normal.webp"
 *         affiliation: "z fighter"
 *         originPlanet:
 *           name: "Planeta Vegeta"
 *           isDestroyed: true
 *           description: "El planeta natal de los saiyajin, destruido por Freezer"
 *           image: "https://dragonball-api.com/planets/planet_vegeta.webp"
 *         transformations:
 *           - name: "Super Saiyan"
 *             ki: "70.000.000"
 *             image: "https://dragonball-api.com/transformations/super_saiyan.webp"
 *
 *     Character:
 *       type: object
 *       required:
 *         - id
 *         - name
 *         - ki
 *         - maxKi
 *         - race
 *         - gender
 *         - description
 *         - image
 *         - affiliation
 *         - originPlanet
 *         - transformations
 *       properties:
 *         id:
 *           type: string
 *           description: El Id auto generado
 *         name:
 *           type: string
 *           description: El nombre del personaje
 *         ki:
 *           type: string
 *           description: El nivel de Ki del personaje
 *         maxKi:
 *           type: string
 *           description: El nivel máximo de Ki del personaje
 *         race:
 *           type: string
 *           description: La raza del personaje
 *         gender:
 *           type: string
 *           description: El género del personaje
 *         description:
 *           type: string
 *           description: Descripción del personaje
 *         image:
 *           type: string
 *           description: Imagen del personaje
 *         affiliation:
 *           type: string
 *           description: El grupo o afiliación del personaje
 *         originPlanet:
 *           type: string
 *           description: Id del planeta de origen
 *         transformations:
 *           type: array
 *           items:
 *             type: string
 *             description: Id de la transformacion
 *       example:
 *         id: "6701ef2528a40b03937e53ea"
 *         name: "goku"
 *         ki: "60.000.000"
 *         maxKi: "90 septillion"
 *         race: "saiyan"
 *         gender: "male"
 *         description: "El protagonista de la serie, conocido por su gran poder y personalidad amigable"
 *         image: "https://dragonball-api.com/characters/goku_normal.webp"
 *         affiliation: "z fighter"
 *         originPlanet: "6703117ce94d155b94aff482"
 *         transformations: ["6703117ce94d155b94aff47e"]
 */

/**
 * @swagger
 * tags:
 *   name: Characters
 *   description:  API para manejar los personajes
 */

/**
 * @swagger
 * /api/characters:
 *   get:
 *     summary: Retorna la lista de personajes
 *     tags: [Characters]
 *     responses:
 *       200:
 *         description: Lista de personajes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CharacterById'
 *       500:
 *         description: Error del servidor
 *
 *   post:
 *     summary: Crea un nuevo personaje
 *     tags: [Characters]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre del personaje
 *                 example: "Goku"
 *               ki:
 *                 type: string
 *                 description: Nivel de Ki del personaje
 *                 example: "60.000.000"
 *               maxKi:
 *                 type: string
 *                 description: Nivel máximo de Ki del personaje
 *                 example: "90 septillion"
 *               race:
 *                 type: string
 *                 description: La raza del personaje
 *                 example: "Saiyan"
 *               gender:
 *                 type: string
 *                 description: El género del personaje
 *                 example: "Male"
 *               description:
 *                 type: string
 *                 description: Breve descripción del personaje
 *                 example: "El protagonista de la serie, conocido por su gran poder y personalidad amigable"
 *               image:
 *                 type: string
 *                 description: URL de la imagen del personaje
 *                 example: "https://dragonball-api.com/characters/goku_normal.webp"
 *               affiliation:
 *                 type: string
 *                 description: La afiliación o grupo del personaje
 *                 example: "Z Fighters"
 *               originPlanet:
 *                 type: object
 *                 description: Información sobre el planeta de origen del personaje
 *                 properties:
 *                   name:
 *                     type: string
 *                     description: Nombre del planeta
 *                     example: "Planeta Vegeta"
 *                   isDestroyed:
 *                     type: boolean
 *                     description: Si el planeta ha sido destruido
 *                     example: true
 *                   description:
 *                     type: string
 *                     description: Descripción del planeta
 *                     example: "El planeta natal de los saiyajin, destruido por Freezer"
 *                   image:
 *                     type: string
 *                     description: URL de la imagen del planeta
 *                     example: "https://dragonball-api.com/planets/planet_vegeta.webp"
 *               transformations:
 *                 type: array
 *                 description: Lista de transformaciones del personaje
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: El nombre de la transformación
 *                       example: "Super Saiyan"
 *                     ki:
 *                       type: string
 *                       description: Nivel de Ki en la transformación
 *                       example: "70.000.000"
 *                     image:
 *                       type: string
 *                       description: URL de la imagen de la transformación
 *                       example: "https://dragonball-api.com/transformations/super_saiyan.webp"
 *     responses:
 *       201:
 *         description: El personaje ha sido creado con éxito
 *         content:
 *           application/json:
 *             schema:
 *                 $ref: '#/components/schemas/Character'
 *       400:
 *         description: Solicitud incorrecta
 */

/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     summary: Retorna un personaje por Id
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del personaje
 *     responses:
 *       200:
 *         description: El personaje ha sido retornado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CharacterById'
 *       404:
 *         description: El personaje no fue encontrado
 *   put:
 *     summary: Actualiza cualquier propiedad o propiedades del personaje
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del personaje a actualizar
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nuevo nombre
 *                 example: "Goku"
 *               ki:
 *                 type: string
 *                 description: El nuevo nivel de Ki
 *                 example: "60.000.000"
 *               maxKi:
 *                 type: string
 *                 description: El nuevo máximo nivel de Ki
 *                 example: "90 septillion"
 *               race:
 *                 type: string
 *                 description: La nueva raza del personaje
 *                 example: "Saiyan"
 *               gender:
 *                 type: string
 *                 description: El nuevo género del personaje
 *                 example: "Male"
 *               description:
 *                 type: string
 *                 description: La nueva descripción del personaje
 *                 example: "El protagonista de la serie, conocido por su gran poder y personalidad amigable"
 *               image:
 *                 type: string
 *                 description: La nueva URL de la imagen
 *                 example: "https://dragonball-api.com/characters/goku_normal.webp"
 *               affiliation:
 *                 type: string
 *                 description: La nueva afiliación del personaje
 *                 example: "Z Fighters"
 *     responses:
 *       200:
 *         description: El personaje ha sido actualizado con éxito
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Character'
 *       404:
 *         description: El personaje no fue encontrado
 *   delete:
 *     summary: Elimina un personaje pasándole el Id
 *     tags: [Characters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: El Id del personaje
 *     responses:
 *       204:
 *         description: El personaje ha sido eliminado con éxito
 *       404:
 *         description: El personaje no fue encontrado
 */

export default router;
