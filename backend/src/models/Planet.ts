import { model, Schema, Document } from "mongoose";

interface IPlanetDB extends Document {
  name: string;
  isDestroyed: boolean;
  description: string;
  image: string;
}

const planetSchema = new Schema(
  {
    name: { type: String, required: true },
    isDestroyed: { type: Boolean, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const PlanetModel = model<IPlanetDB>("Planet", planetSchema);
export default PlanetModel;
