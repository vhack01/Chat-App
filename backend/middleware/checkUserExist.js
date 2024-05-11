import USER from "../db/db.js";

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;

  try {
    const isExist = await USER.findOne({ email });
    if (isExist) {
      return res.status(411).json({
        message: "Email already taken / Incorrect inputs",
      });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server Error",
    });
  }

  next();
};

export default checkUserExist;
