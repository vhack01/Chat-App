import USER from "../db/db.js";

const isValidUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const isValid = await USER.findOne({ email, password });
    if (!isValid) {
      return res.status(401).json({
        message: "Unauthorized user",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
};

export default isValidUser;
