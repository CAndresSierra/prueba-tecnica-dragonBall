import { Schema, Document, model, ObjectId } from "mongoose";
import { IPlanetDB } from "./Planet";
import { ITransformationDB } from "./Transformation";

export interface ICharacterDB extends Document {
  name: string;
  ki: string;
  maxKi: string;
  race: string;
  gender: string;
  description: string;
  image: string;
  affiliation: string;
  originPlanet: ObjectId;
  transformations: ObjectId[];
}

const characterSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    ki: { type: String, required: true, trim: true, lowercase: true },
    maxKi: { type: String, required: true, trim: true, lowercase: true },
    race: { type: String, required: true, trim: true, lowercase: true },
    gender: { type: String, required: true, trim: true, lowercase: true },
    description: { type: String, required: true, trim: true, lowercase: true },
    image: { type: String, required: true, trim: true },
    affiliation: { type: String, required: true, trim: true, lowercase: true },
    originPlanet: {
      type: Schema.Types.ObjectId,
      ref: "Planet",
    },
    transformations: [
      {
        ref: "Transformation",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const CharacterModel = model<ICharacterDB>("Character", characterSchema);
export default CharacterModel;
