import zod from "zod";

export const validSignup = zod.object({
  name: zod.string().trim().min(1),
  email: zod.string(),
  password: zod.string().min(4),
});
