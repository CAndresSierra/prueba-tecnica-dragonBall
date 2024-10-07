import { IPlanetDto } from "../dtos/IPlanetDtos";
import CharacterModel from "../models/Character";
import PlanetModel, { IPlanetDB } from "../models/Planet";

export const getPlanetsService = async (): Promise<IPlanetDB[]> => {
  const planets = await PlanetModel.find().populate("characters");

  if (!planets) throw new Error("No se encontraron planetas. Lo sentimos");

  return planets;
};

export const getPlanetByIdService = async (id: string): Promise<IPlanetDB> => {
  const planet = await PlanetModel.findById(id).populate("characters");

  if (!planet) throw new Error("No se encontro el planeta solicitado");

  return planet;
};

export const updatePlanetByIdService = async (
  id: string,
  planetDto: Partial<IPlanetDto>
): Promise<IPlanetDB> => {
  const planetFound = await PlanetModel.findById(id);

  if (!planetFound) throw new Error("No se encontro el planeta a actualizar");

  const planetUpdated = await PlanetModel.findByIdAndUpdate(
    planetFound._id,
    planetDto,
    { new: true }
  );

  if (!planetUpdated || typeof planetUpdated === null) {
    throw new Error("Error al actualizar el planeta");
  }

  return planetUpdated;
};

export const deletePlanetByIdService = async (id: string): Promise<string> => {
  const planetFound = await PlanetModel.findById(id);

  if (!planetFound) throw new Error("No se encontro el planeta a eliminar");

  await PlanetModel.findByIdAndDelete(planetFound._id);

  return "Planeta eliminado con exito";
};

export const createPlanetService = async () => {};
