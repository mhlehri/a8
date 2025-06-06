import { z } from "zod";

export const zodBookSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  membershipDate: z.date(),
});
