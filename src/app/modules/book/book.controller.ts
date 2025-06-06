import AppError from "../../../helper/AppError";
import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { bookService } from "./book.service";

const createBook = CatchAsync(async (req, res) => {
  // console.log(req.body);
  const result = await bookService.createBook(req.body);
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});

const readAllBooks = CatchAsync(async (_req, res) => {
  const result = await bookService.readAllBooks();
  sendResponse(res, {
    success: true,
    status: 200,
    message: "Books retrieved successfully",
    data: result || [],
  });
});

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
const deleteBook = CatchAsync(() => {});

export const bookController = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
