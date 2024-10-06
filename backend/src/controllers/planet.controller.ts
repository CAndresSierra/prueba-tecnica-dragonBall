import { Request, Response } from "express";
import * as planetService from "../services/planet.service";
import { IPlanetDto } from "../dtos/IPlanetDtos";

export const getPlanets = async (req: Request, res: Response) => {
  try {
    const planets = await planetService.getPlanetsService();
    res.status(200).json(planets);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getPlanetById = async (req: Request, res: Response) => {
  try {
    const { planetId } = req.params;

    const planet = await planetService.getPlanetByIdService(planetId);
    res.status(200).json(planet);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updatePlanetById = async (req: Request, res: Response) => {
  try {
    const { planetId } = req.params;
    const { name, isDestroyed, description, image }: Partial<IPlanetDto> =
      req.body;

    const planetUpdate = await planetService.updatePlanetByIdService(planetId, {
      name,
      isDestroyed,
      description,
      image,
    });

    res.status(200).json(planetUpdate);
  } catch (error: any) {
    if (error.message === "No se encontro el planeta a actualizar") {
      res.status(404).json({ message: error.message });
    } else if (error.message === "Error al actualizar el planeta") {
      res.status(500).json({ message: error.message });
    }

    res.status(500).json({ message: error.message });
  }
};
export const deletePlanetById = async (req: Request, res: Response) => {
  try {
    const { planetId } = req.params;
    await planetService.deletePlanetByIdService(planetId);
    res.status(204).send();
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
