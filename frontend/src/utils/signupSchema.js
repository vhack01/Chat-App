import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().min(4),
  email: z.string().min(4),
  password: z.string().min(4),
});
