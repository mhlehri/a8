import { z } from "zod";

export const zodBookSchema = z.object({
  bookId: z.string(),
  memberId: z.string(),
});
