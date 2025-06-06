import { Book } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createBook = async (data: Book) => {
  // console.log(data);
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
      bookId: id,
    },
  });

  return r;
};

const updateBook = async (bookId: string, data: Partial<Book>) => {
  const r = await prisma.book.update({
    where: {
      bookId,
    },
    data,
  });
};

const deleteBook = async () => {};

export const bookService = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
