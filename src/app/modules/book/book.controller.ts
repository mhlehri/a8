import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { bookService } from "./book.service";

const createBook = CatchAsync((req, res) => {
  const result = bookService.createBook(req.body);
  sendResponse(res, {
    success: true,
    status: 201,
    message: "Book created successfully",
    data: result,
  });
});
const readAllBooks = CatchAsync(() => {});
const readBookById = CatchAsync(() => {});
const updateBook = CatchAsync(() => {});
const deleteBook = CatchAsync(() => {});

export const bookController = {
  createBook,
  readAllBooks,
  readBookById,
  updateBook,
  deleteBook,
};
