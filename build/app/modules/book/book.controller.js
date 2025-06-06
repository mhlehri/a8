"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const AppError_1 = __importDefault(require("../../../helper/AppError"));
const CatchAsync_1 = __importDefault(require("../../../helper/CatchAsync"));
const sendRespose_1 = __importDefault(require("../../../helper/sendRespose"));
const book_service_1 = require("./book.service");
/**
 * Book Controller
 * Handles all HTTP requests related to book management operations
 */
// Create a new book in the library system
const createBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookService.createBook(req.body);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 201,
        message: "Book created successfully",
        data: result,
    });
}));
// Retrieve all books from the library
const readAllBooks = (0, CatchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield book_service_1.bookService.readAllBooks();
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: result.length > 0 ? "Books retrieved successfully" : "No Books found",
        data: result || [],
    });
}));
// Retrieve a specific book by its ID
const readBookById = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.bookService.readBookById(bookId);
    if (!result) {
        throw new AppError_1.default(404, "Book not found");
    }
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Book retrieved successfully",
        data: result,
    });
}));
// Update an existing book's information
const updateBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    const result = yield book_service_1.bookService.updateBook(bookId, req.body);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Book updated successfully",
        data: result,
    });
}));
// Delete a book from the library system
const deleteBook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bookId } = req.params;
    yield book_service_1.bookService.deleteBook(bookId);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Book successfully deleted",
    });
}));
exports.bookController = {
    createBook,
    readAllBooks,
    readBookById,
    updateBook,
    deleteBook,
};
