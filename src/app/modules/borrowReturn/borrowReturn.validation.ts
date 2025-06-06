import { z } from "zod";

export const zodBorrowReturnSchema = z.object({
  bookId: z.string(),
  memberId: z.string(),
});
