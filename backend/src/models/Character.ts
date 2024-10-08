import { Schema, Document, model, ObjectId } from "mongoose";
import TransformationModel from "./Transformation";
import PlanetModel from "./Planet";

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

characterSchema.pre(
  "findOneAndDelete",
  async function (next: (err?: any) => void) {
    try {
      const character = await this.model.findOne(this.getQuery());

      if (character) {
        await TransformationModel.deleteMany({ character: character._id });
      }

      next();
    } catch (err) {
      next(err);
    }
  }
);

const CharacterModel = model<ICharacterDB>("Character", characterSchema);
export default CharacterModel;
