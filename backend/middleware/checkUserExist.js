import USER from "../db/db.js";

const checkUserExist = async (req, res, next) => {
  const { email } = req.body;
  const isExist = await USER.findOne({ email });
  console.log("isExist:", isExist);
  if (isExist) {
    return res.status(411).json({
      message: "Email already taken / Incorrect inputs",
    });
  }

  next();
};

export default checkUserExist;
