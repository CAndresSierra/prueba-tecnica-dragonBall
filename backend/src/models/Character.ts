import { Schema, Document, model } from "mongoose";

export interface ICharacterDB extends Document {
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
}

const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    ki: { type: String, required: true },
    maxKi: { type: String, required: true },
    race: { type: String, required: true },
    gender: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    affiliation: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const CharacterModel = model<ICharacterDB>("Character", characterSchema);
export default CharacterModel;
