import { BorrowRecord } from "@prisma/client";
import AppError from "../../../helper/AppError";
import prisma from "../../../shared/prisma";

/**
 * Borrow Return Service
 * Contains business logic for book borrowing and returning operations
 */

// Process book borrowing with validation
const borrowABook = async (data: BorrowRecord) => {
  // Validate book existence
  const isBookExits = await prisma.book.findUnique({
    where: {
      bookId: data.bookId,
    },
  });

  if (!isBookExits) {
    throw new AppError(404, "Book doesn't exits");
  }

  // Validate member existence
  const isMemberExits = await prisma.member.findUnique({
    where: {
      memberId: data.memberId,
    },
  });

  if (!isMemberExits) {
    throw new AppError(404, "Member doesn't exits");
  }

  // Create borrow record
  const r = await prisma.borrowRecord.create({
    data,
  });

  return r;
};

// Process book return with validation
const returnABook = async (data: BorrowRecord) => {
  // Validate borrow record existence
  const isBorrowExits = await prisma.borrowRecord.findUnique({
    where: {
      borrowId: data.borrowId,
    },
  });

  if (!isBorrowExits) {
    throw new AppError(404, "Borrow record not found");
  }
};

// Retrieve overdue books list with calculated overdue days
const borrowOverdueList = async () => {
  // Define maximum borrow time (14 days)
  const maxBorrowTime = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
  const overdueDate = new Date(Date.now() - maxBorrowTime);

  // Find all overdue borrow records
  const overdueRecords = await prisma.borrowRecord.findMany({
    where: {
      borrowDate: {
        lt: overdueDate,
      },
    },
    select: {
      borrowId: true,
      borrowDate: true,
      book: {
        select: {
          title: true,
        },
      },
      member: {
        select: {
          name: true,
        },
      },
    },
  });

  // Format overdue records with calculated overdue days
  const overdueList = overdueRecords.map((record) => {
    const currentDate = new Date();
    const borrowDate = new Date(record.borrowDate);
    const dueDate = new Date(borrowDate.getTime() + maxBorrowTime);
    const overdueDays = Math.floor(
      (currentDate.getTime() - dueDate.getTime()) / (24 * 60 * 60 * 1000)
    );

    return {
      borrowId: record.borrowId,
      bookTitle: record.book.title,
      borrowerName: record.member.name,
      overdueDays: overdueDays,
    };
  });

  return overdueList;
};

export const borrowReturnService = {
  borrowABook,
  returnABook,
  borrowOverdueList,
};
