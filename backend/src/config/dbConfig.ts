import mongoose from "mongoose";
import { MONGO_DB_URI } from "./envs";

const dbConfig = async () => {
  try {
    await mongoose.connect(MONGO_DB_URI);
    console.log("Database succesfully connect");
  } catch (error: any) {
    console.log(error.message);
  }
};

export default dbConfig;
