import { z } from "zod";

export const zodBorrowSchema = z.object({
  bookId: z.string(),
  memberId: z.string(),
});

export const zodReturnSchema = z.object({
  borrowId: z.string(),
});
