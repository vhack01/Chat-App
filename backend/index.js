import express from "express";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve("../.env") });
const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
  res.send("welcome");
});
app.listen(PORT, () => console.log("Listening on PPORT:", PORT));
