import { Book } from "../../../generated/prisma";
import AppError from "../../../helper/AppError";
import prisma from "../../../shared/prisma";

/**
 * Book Service
 * Contains business logic for book management operations
 */

// Create a new book record in the database
const createBook = async (data: Book) => {
  const r = await prisma.book.create({
    data,
  });

  return r;
};

// Retrieve all books from the database
const readAllBooks = async () => {
  const r = await prisma.book.findMany();

  return r;
};

// Find a specific book by its ID
const readBookById = async (bookId: string) => {
  const r = await prisma.book.findUnique({
    where: {
      bookId,
    },
  });

  return r;
};

// Update book information with validation
const updateBook = async (bookId: string, data: Partial<Book>) => {

  // Check if book exists before updating
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

// Delete a book with existence validation
const deleteBook = async (bookId: string) => {
  // Verify book exists before deletion
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
