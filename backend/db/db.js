import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });

try {
  mongoose.connect(process.env.MONGODB_URL);
} catch (err) {
  console.log("FAILED: to connect database");
}

const usersSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const USER = mongoose.model("User", usersSchema);
export default USER;
