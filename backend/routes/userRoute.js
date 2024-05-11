import { Router } from "express";
import validateSignup from "../middleware/validateSignup.js";
import userExist from "../middleware/userExist.js";
import USER from "../db/db.js";
const router = Router();

router.post("/signup", userExist, validateSignup, async (req, res) => {
  const signupData = req.body;
  const isCreated = await USER.create(signupData);
  console.log("isCreated", isCreated);

  if (!isCreated) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  res.status(200).json({
    msg: "Signup Successful",
    signupData,
  });
});

export default router;
