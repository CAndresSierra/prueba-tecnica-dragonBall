import { IOriginPlanet } from "./IOriginPlanet";
import { ITransformation } from "./ITransfomation";

export interface IChracter {
  _id: string;
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: IOriginPlanet;
  transformations: ITransformation[];
  createdAt: string;
  updatedAt: string;
}
