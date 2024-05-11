import express from "express";
import dotenv from "dotenv";
import path from "path";
import mainRoute from "./routes/mainRoute.js";
const app = express();

dotenv.config({ path: path.resolve("../.env") });
const PORT = process.env.PORT;

app.use(express.json());
app.use("/api", mainRoute);

app.get("/signin", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => console.log("Listening on PPORT:", PORT));
