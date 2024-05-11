import { validSignup } from "../types.js";

function validateSignup(req, res, next) {
  const signupData = req.body;
  const result = validSignup.safeParse(signupData);
  if (!result.success) return res.state;
  next();
}

export default validateSignup;
