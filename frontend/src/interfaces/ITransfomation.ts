import { IChracter } from "./ICharacter";

export interface ITransformation {
  id: string;
  name: string;
  image: string;
  ki: string;
  character: IChracter;
  createdAt: string;
  updatedAt: string;
}
