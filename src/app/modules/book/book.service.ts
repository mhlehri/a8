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

const readBookById = async (id: string) => {
  const r = await prisma.book.findUniqueOrThrow({
    where: {
      bookId: id,
    },
  });

  return r;
};
const updateBook = async () => {};
const deleteBook = async () => {};

export const bookService = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
