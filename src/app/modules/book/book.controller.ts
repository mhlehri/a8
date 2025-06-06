import AppError from "../../../helper/AppError";
import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { bookService } from "./book.service";

/**
 * Book Controller
 * Handles all HTTP requests related to book management operations
 */

// Create a new book in the library system
const createBook = CatchAsync(async (req, res) => {
  const result = await bookService.createBook(req.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});

// Retrieve all books from the library
const readAllBooks = CatchAsync(async (_req, res) => {
  const result = await bookService.readAllBooks();

  sendResponse(res, {
    success: true,
    status: 200,
    message:
      result.length > 0 ? "Books retrieved successfully" : "No Books found",
    data: result || [],
  });
});

// Retrieve a specific book by its ID
const readBookById = CatchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookService.readBookById(bookId);

  if (!result) {
    throw new AppError(404, "Book not found");
  }

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

// Update an existing book's information
const updateBook = CatchAsync(async (req, res) => {
  const { bookId } = req.params;
  const result = await bookService.updateBook(bookId, req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book updated successfully",
    data: result,
  });
});

// Delete a book from the library system
const deleteBook = CatchAsync(async (req, res) => {
  const { bookId } = req.params;
  await bookService.deleteBook(bookId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Book successfully deleted",
  });
});

export const bookController = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
