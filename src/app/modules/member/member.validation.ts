import { z } from "zod";

export const zodMemberSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  membershipDate: z.date(),
});
