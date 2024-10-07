import { IChracter } from "./ICharacter";

export interface IOriginPlanet {
  id: string;
  name: string;
  isDestroyed: boolean;
  description: string;
  imageL: string;
  charactersArray: IChracter[];
  createdAt: string;
  updatedAt: string;
}
