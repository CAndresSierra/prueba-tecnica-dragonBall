import { IPlanetPreload } from "./IPlanetPreload";
import { ITransformationPreload } from "./ITransfromationPreload";

export interface ICharacterPreload {
  id: number;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: IPlanetPreload;
  transformations: ITransformationPreload[];
}
