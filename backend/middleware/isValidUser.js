import USER from "../db/db.js";

const isValidUser = async (req, res, next) => {
  const { email, password } = req.body;
  const isValid = await USER.findOne({ email, password });
  if (!isValid) {
    return res.status(401).json({
      message: "Unauthorized user",
    });
  }
  next();
};

export default isValidUser;
