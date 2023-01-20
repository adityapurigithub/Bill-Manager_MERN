import mongoose from "mongoose";

export const db = async () => {
  await mongoose.connect(
    "mongodb+srv://aditya99:KCfPhVqlLfEPkKGS@cluster0.zwofint.mongodb.net/?retryWrites=true&w=majority"
  );
  console.log("mongo connected");
};
