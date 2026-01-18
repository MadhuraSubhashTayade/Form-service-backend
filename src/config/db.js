import mongoose from "mongoose";
import { CONFIG } from ".";

export const connectDb = async () => {
  try {
    await mongoose.connect(CONFIG.MONGODB_URL);
    console.log(`Successfully connected to MongoDB`);
  } catch (err) {
    console.log(`Error connecting to db: ${err}`);
  }
};
