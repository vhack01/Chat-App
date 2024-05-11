import express from "express";
import dotenv from "dotenv";
import path from "path";
import mainRoute from "./routes/mainRoutes.js";
import cors from "cors";
// import http from "http";
// import { Server } from "socket.io";
const app = express();

app.use(cors());
dotenv.config({ path: path.resolve("../.env") });
const PORT = process.env.PORT;

// const server = http.createServer(app);
// const io = new Server(server);

app.use(express.json());
app.use("/api", mainRoute);

app.get("/signin", (req, res) => {
  res.send("welcome");
});

app.listen(PORT, () => console.log("Listening on PPORT:", PORT));
