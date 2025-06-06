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
exports.bookService = void 0;
const AppError_1 = __importDefault(require("../../../helper/AppError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
/**
 * Book Service
 * Contains business logic for book management operations
 */
// Create a new book record in the database
const createBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield prisma_1.default.book.create({
        data,
    });
    return r;
});
// Retrieve all books from the database
const readAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield prisma_1.default.book.findMany();
    return r;
});
// Find a specific book by its ID
const readBookById = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    return r;
});
// Update book information with validation
const updateBook = (bookId, data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if book exists before updating
    const isExits = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!isExits) {
        throw new AppError_1.default(404, "Book doesn't exits");
    }
    const r = yield prisma_1.default.book.update({
        where: {
            bookId,
        },
        data,
    });
    return r;
});
// Delete a book with existence validation
const deleteBook = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    // Verify book exists before deletion
    const isExits = yield prisma_1.default.book.findUnique({
        where: {
            bookId,
        },
    });
    if (!isExits) {
        throw new AppError_1.default(404, "Book doesn't exits");
    }
    const r = yield prisma_1.default.book.delete({
        where: {
            bookId,
        },
    });
    return r;
});
exports.bookService = {
    createBook,
    readAllBooks,
    readBookById,
    updateBook,
    deleteBook,
};
