import { Book } from "../../../generated/prisma";
import AppError from "../../../helper/AppError";
import prisma from "../../../shared/prisma";

const createBook = async (data: Book) => {
  const r = await prisma.book.create({
    data,
  });

  return r;
};

const readAllBooks = async () => {
  const r = await prisma.book.findMany();

  return r;
};

const readBookById = async (bookId: string) => {
  const r = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return r;
};

const updateBook = async (bookId: string, data: Partial<Book>) => {

  const isExits = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  if (!isExits) {
    throw new AppError(404, "Book doesn't exits");
  }

  const r = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });

  return r;
};

const deleteBook = async (bookId: string) => {
  const isExits = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });
  if (!isExits) {
    throw new AppError(404, "Book doesn't exits");
  }

  const r = await prisma.book.delete({
    where: {
      bookId,
    },
  });

  return r;
};

export const bookService = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
