import { model, Schema, Document } from "mongoose";

interface ITransformationDB extends Document {
  name: string;
  image: string;
  ki: string;
}

const transformationSchema = new Schema(
  {
    name: { type: String },
    image: { type: String },
    ki: { type: String },
  },
  {
    timestamps: true,
  }
);

const TransformationModel = model<ITransformationDB>(
  "Transformation",
  transformationSchema
);

export default TransformationModel;
