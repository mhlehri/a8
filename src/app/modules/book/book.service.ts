import { Book } from "../../../generated/prisma";
import prisma from "../../../shared/prisma";

const createBook = async (data: Book) => {
  // console.log(data);
  const r = await prisma.book.create({
    data,
  });

  return r;
};
const readAllBooks = () => {};
const readBookById = () => {};
const updateBook = () => {};
const deleteBook = () => {};

export const bookService = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
