import { ObjectId } from "mongoose";
import CharacterModel, { ICharacterDB } from "../models/Character";
import PlanetModel from "../models/Planet";
import TransformationModel from "../models/Transformation";
import { ICharacterPreload } from "./interfaces/ICharacterPreload";

export const preloadCharacters = async (): Promise<void> => {
  const characters = await CharacterModel.find();

  if (characters.length)
    return console.log("Preload was not done because there is already data");

  // await CharacterModel.deleteMany();
  // await PlanetModel.deleteMany();
  // await TransformationModel.deleteMany();
  try {
    const res = await fetch(
      "https://dragonball-api.com/api/characters?limit=40",
      { method: "GET" }
    );

    const allCharacters = await res.json();
    const charactersIds: number[] = [];

    await allCharacters.items.map(async (character: ICharacterPreload) => {
      await charactersIds.push(character.id);
    });

    const characterPreload: ICharacterPreload[] = [];

    for await (const id of charactersIds) {
      const res = await fetch(
        `https://dragonball-api.com/api/characters/${id}`,
        { method: "GET" }
      );
      const character: ICharacterPreload = await res.json();
      characterPreload.push(character);
    }

    for await (let character of characterPreload) {
      let originplanet = await PlanetModel.findOne({
        name: character.originPlanet.name,
      });

      if (!originplanet) {
        originplanet = await PlanetModel.create(character.originPlanet);
      }

      const newCharacter: ICharacterDB = new CharacterModel({
        name: character.name,
        ki: character.ki,
        maxKi: character.maxKi,
        race: character.race,
        gender: character.gender,
        description: character.description,
        image: character.image,
        affiliation: character.affiliation,
        originPlanet: originplanet._id,
        transformations: [],
      });

      await PlanetModel.findByIdAndUpdate(originplanet._id, {
        $push: { characters: newCharacter._id },
      });

      if (
        Array.isArray(character.transformations) &&
        character.transformations.length > 0
      ) {
        const transformationsIds: ObjectId[] = [];

        for await (let transformation of character.transformations) {
          let transformationRecord = await TransformationModel.findOne({
            name: transformation.name,
          });

          if (!transformationRecord) {
            transformationRecord = await TransformationModel.create({
              name: transformation.name,
              ki: transformation.ki,
              image: transformation.image,
              character: newCharacter._id,
            });
          }
          transformationsIds.push(transformationRecord._id as ObjectId);
        }

        newCharacter.transformations = transformationsIds;
      }

      await newCharacter.save();
    }

    console.log("Preload Dta was done successfully ");
  } catch (error: any) {
    console.log(error.message);
  }
};
