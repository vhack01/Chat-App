import { Router } from "express";
import validateSignup from "../middleware/validateSignup.js";
import checkUserExist from "../middleware/checkUserExist.js";
import isValidUser from "../middleware/isValidUser.js";
import USER from "../db/db.js";
import jwt from "jsonwebtoken";
const router = Router();
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve("../.env") });

router.post("/signup", checkUserExist, validateSignup, async (req, res) => {
  const signupData = req.body;
  try {
    const isCreated = await USER.create(signupData);
    if (!isCreated) {
      return res.status(500).json({
        message: "Internal Server Error",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  res.status(200).json({
    msg: "Signup Successful",
    signupData,
  });
});

router.post("/signin", isValidUser, (req, res) => {
  const email = req.body.email;
  let token;
  try {
    token = jwt.sign({ email }, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(500).json({
      message: "Sigin Failed",
    });
  }

  res.status(200).json({
    message: "Sigin successful",
    token,
  });
});

export default router;
