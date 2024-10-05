import CharacterModel, { ICharacterDB } from "../models/Character";
import PlanetModel from "../models/Planet";
import TransformationModel from "../models/Transformation";
import { ICharacterPreload } from "./interfaces/ICharacterPreload";
import { IPlanetPreload } from "./interfaces/IPlanetPreload";
import { ITransformationPreload } from "./interfaces/ITransfromationPreload";

export const preloadCharacters = async () => {
  try {
    const characters = await CharacterModel.find();

    if (characters.length)
      return console.log(
        "Characters preload was not done because there is already data"
      );
    const res = await fetch(
      "https://dragonball-api.com/api/characters?limit=58",
      {
        method: "GET",
      }
    );
    const charactersPreload = await res.json();

    await charactersPreload.items.map(async (character: ICharacterPreload) => {
      const newCharacter = CharacterModel.create(character);
      (await newCharacter).save();
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const preloadPlanets = async () => {
  try {
    const planets = await PlanetModel.find();
    if (planets.length)
      return console.log(
        "Planets preload was not done because there is already data"
      );

    const res = await fetch("https://dragonball-api.com/api/planets?limit=20", {
      method: "GET",
    });
    const planetsPreload = await res.json();

    await planetsPreload.items.map(async (planet: IPlanetPreload) => {
      const newPlanet = await PlanetModel.create(planet);
      await newPlanet.save();
    });
  } catch (error: any) {
    console.log(error.message);
  }
};

export const preloadTransformations = async () => {
  try {
    const transformations = await TransformationModel.find();
    if (transformations.length)
      return console.log(
        "transformations preload was not done because there is already data"
      );

    const res = await fetch("https://dragonball-api.com/api/transformations", {
      method: "GET",
    });
    const transformationsPreload = await res.json();

    await transformationsPreload.map(
      async (transformation: ITransformationPreload) => {
        const newTransformation = await TransformationModel.create(
          transformation
        );
        await newTransformation.save();
      }
    );
  } catch (error: any) {
    console.log(error.message);
  }
};
