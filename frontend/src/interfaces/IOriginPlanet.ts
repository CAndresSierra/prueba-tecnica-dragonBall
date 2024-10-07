import { IChracter } from "./ICharacter";

export interface IOriginPlanet {
  _id: string;
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  characters: IChracter[];
  createdAt: string;
  updatedAt: string;
}
