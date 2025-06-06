import { z } from "zod";

export const zodBookSchema = z.object({
  title: z.string(),
  genre: z.string(),
  publishedYear: z.number(),
  totalCopies: z.number(),
  availableCopies: z.number(),
});
