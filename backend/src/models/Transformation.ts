import { model, Schema, Document, ObjectId } from "mongoose";
import { ICharacterDB } from "./Character";

export interface ITransformationDB extends Document {
  name: string;
  image: string;
  ki: string;
  character: ObjectId;
}

const transformationSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, lowercase: true },
    image: { type: String },
    ki: { type: String },
    character: {
      type: Schema.Types.ObjectId,
      ref: "Character",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const TransformationModel = model<ITransformationDB>(
  "Transformation",
  transformationSchema
);

export default TransformationModel;
