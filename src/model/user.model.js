import mongoose from "mongoose";
import paginate from "mongoose-paginate-v2";
const userCollection = "users";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, unique: true, required: true },
  age: { type: Number, default: 18 },
  password: { type: String },
});

userSchema.plugin(paginate);
export const userModel = mongoose.model(userCollection, userSchema);
