import { IChracter } from "./ICharacter";

export interface ITransformation {
  _id: string;
  name: string;
  image: string;
  ki: string;
  character: IChracter;
  createdAt: string;
  updatedAt: string;
}
