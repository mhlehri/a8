import { BorrowRecord } from "../../../generated/prisma";
import AppError from "../../../helper/AppError";
import prisma from "../../../shared/prisma";

const borrowABook = async (data: BorrowRecord) => {
  console.log(data);
  const isBookExits = await prisma.book.findUnique({
    where: {
      bookId: data.bookId,
    },
  });

  if (!isBookExits) {
    throw new AppError(404, "Book doesn't exits");
  }

  const isMemberExits = await prisma.member.findUnique({
    where: {
      memberId: data.memberId,
    },
  });

  if (!isMemberExits) {
    throw new AppError(404, "Member doesn't exits");
  }

  const r = await prisma.borrowRecord.create({
    data,
  });

  return r;
};
const returnABook = async () => {};

export const borrowReturnService = {
  borrowABook,
  returnABook,
};
