import { ObjectId, Schema } from "mongoose";
import { ICharacterDto } from "../dtos/ICharacterDto";
import CharacterModel, { ICharacterDB } from "../models/Character";
import TransformationModel from "../models/Transformation";
import PlanetModel from "../models/Planet";

export const getCharactersService = async (): Promise<ICharacterDB[]> => {
  const characters = await CharacterModel.find().select(
    "-originPlanet -transformations"
  );
  if (!characters.length) throw new Error("No se encontraron datos");

  return characters;
};

export const getCharacterByIdService = async (
  id: string
): Promise<ICharacterDB> => {
  const character = await CharacterModel.findById(id)
    .populate("originPlanet", "-characters")
    .populate("transformations", "-character");

  if (!character) throw new Error("No se encontro el caracter solicitado");

  return character;
};

export const updateCharacterByIdService = async (
  id: string,
  character: Partial<ICharacterDto>
): Promise<ICharacterDB | undefined> => {
  const characterFound = await CharacterModel.findById(id);

  if (!characterFound)
    throw new Error("No se encontro el caracter a actualizar");

  if (characterFound) {
    const characterUpdated = await CharacterModel.findByIdAndUpdate(
      characterFound._id,
      character,
      { new: true }
    );

    if (!characterUpdated || typeof characterFound === null) {
      throw new Error("No se pudo actulizar el caracter");
    }

    return characterUpdated;
  }
};

export const deleteCharacterByIdService = async (
  id: string
): Promise<ICharacterDB | undefined> => {
  const characterFound = await CharacterModel.findById(id);

  if (!characterFound) {
    throw new Error("No se encontro el caracter a eliminar");
  }

  if (characterFound) {
    const characterDeleted = await CharacterModel.findByIdAndDelete(id);

    if (!characterDeleted) {
      throw new Error("No se pudo eliminar el caracter");
    }

    return characterDeleted;
  }
};

export const createCharacterService = async (characterDto: ICharacterDto) => {
  const newCharacter = new CharacterModel({
    ...characterDto,
    transformations: [],
  });

  for await (const transformation of characterDto.transformations) {
    let transformationFound = await TransformationModel.findOne({
      name: transformation.name,
    });

    if (!transformationFound) {
      transformationFound = new TransformationModel({
        name: transformation.name,
        image: transformation.image,
        ki: transformation.ki,
      });

      await transformationFound.save();
    }

    transformationFound.character = newCharacter.id;
    await transformationFound.save();

    newCharacter.transformations.push(transformationFound.id);
  }

  let originPlanetFound = await PlanetModel.findOne({
    name: characterDto.originPlanet.name,
  });

  if (!originPlanetFound) {
    originPlanetFound = new PlanetModel({
      name: characterDto.originPlanet.name,
      isDestroyed: characterDto.originPlanet.isDestroyed,
      description: characterDto.originPlanet.description,
      image: characterDto.originPlanet.name,
    });

    await originPlanetFound.save();
  }

  originPlanetFound.characters.push(newCharacter.id);
  await originPlanetFound.save();

  newCharacter.originPlanet = originPlanetFound.id;

  await newCharacter.save();

  if (!newCharacter) throw new Error("No se pudo crear el caracter");

  return newCharacter;
};
