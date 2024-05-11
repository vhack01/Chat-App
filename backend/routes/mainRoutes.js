import { Router } from "express";
import userRoute from "./userRoutes.js";
const router = Router();

router.use("/user", userRoute);

export default router;
