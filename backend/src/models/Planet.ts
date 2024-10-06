import { model, Schema, Document, ObjectId } from "mongoose";

export interface IPlanetDB extends Document {
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
  characters: ObjectId[];
}

const planetSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    isDestroyed: { type: Boolean, required: true, trim: true, lowercase: true },
    description: { type: String, required: true, trim: true, lowercase: true },
    image: { type: String, required: true, trim: true, lowercase: true },
    characters: [
      {
        ref: "Character",
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const PlanetModel = model<IPlanetDB>("Planet", planetSchema);
export default PlanetModel;
