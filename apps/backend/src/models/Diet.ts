import mongoose, { Schema } from "mongoose";

const DietSchema = new Schema({
  id: Number,
  name: String,
  price: Number,
});

export const DietModel = mongoose.model("Diets", DietSchema);
