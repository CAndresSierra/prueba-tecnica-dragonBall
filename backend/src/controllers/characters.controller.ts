import { Request, Response } from "express";
import * as characterService from "../services/characters.service";
import { ICharacterDB } from "../models/Character";
import { ICharacterDto } from "../dtos/ICharacterDto";

export const getCharacters = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const characters: ICharacterDB[] =
      await characterService.getCharactersService();
    res.status(200).json(characters);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getCharacterById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { characterId } = req.params;
    const character = await characterService.getCharacterByIdService(
      characterId
    );
    res.status(200).json(character);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const updateCharacterById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { characterId } = req.params;
    const {
      name,
      ki,
      maxKi,
      race,
      gender,
      description,
      image,
      affiliation,
    }: Partial<ICharacterDto> = req.body;

    const characterUpdated = await characterService.updateCharacterByIdService(
      characterId,
      { name, ki, maxKi, race, gender, description, image, affiliation }
    );
    res.status(200).json(characterUpdated);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};

export const createCharacter = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const {
      name,
      ki,
      maxKi,
      race,
      gender,
      description,
      image,
      affiliation,
      originPlanet,
      transformations,
    }: ICharacterDto = req.body;

    const newCharacter = await characterService.createCharacterService({
      name,
      ki,
      maxKi,
      race,
      gender,
      description,
      image,
      affiliation,
      originPlanet,
      transformations,
    });

    res.status(201).json(newCharacter);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteCharacterById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { characterId } = req.params;
    const characterDeleted = await characterService.deleteCharacterByIdService(
      characterId
    );
    res.status(204);
  } catch (error: any) {
    res.status(404).json({ message: error.message });
  }
};
