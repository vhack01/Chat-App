import { signupSchema } from "./signupSchema";
const validateSignup = (data) => {
  return signupSchema.safeParse(data);
};

export default validateSignup;
