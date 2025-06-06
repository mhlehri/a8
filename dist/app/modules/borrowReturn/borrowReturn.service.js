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
exports.borrowReturnService = void 0;
const AppError_1 = __importDefault(require("../../../helper/AppError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
/**
 * Borrow Return Service
 * Contains business logic for book borrowing and returning operations
 */
// Process book borrowing with validation
const borrowABook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate book existence
    const isBookExits = yield prisma_1.default.book.findUnique({
        where: {
            bookId: data.bookId,
        },
    });
    if (!isBookExits) {
        throw new AppError_1.default(404, "Book doesn't exits");
    }
    // Validate member existence
    const isMemberExits = yield prisma_1.default.member.findUnique({
        where: {
            memberId: data.memberId,
        },
    });
    if (!isMemberExits) {
        throw new AppError_1.default(404, "Member doesn't exits");
    }
    // Create borrow record
    const r = yield prisma_1.default.borrowRecord.create({
        data,
    });
    return r;
});
// Process book return with validation
const returnABook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate borrow record existence
    const isBorrowExits = yield prisma_1.default.borrowRecord.findUnique({
        where: {
            borrowId: data.borrowId,
        },
    });
    if (!isBorrowExits) {
        throw new AppError_1.default(404, "Borrow record not found");
    }
});
// Retrieve overdue books list with calculated overdue days
const borrowOverdueList = () => __awaiter(void 0, void 0, void 0, function* () {
    // Define maximum borrow time (14 days)
    const maxBorrowTime = 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
    const overdueDate = new Date(Date.now() - maxBorrowTime);
    // Find all overdue borrow records
    const overdueRecords = yield prisma_1.default.borrowRecord.findMany({
        where: {
            borrowDate: {
                lt: overdueDate,
            },
        },
        select: {
            borrowId: true,
            borrowDate: true,
            book: {
                select: {
                    title: true,
                },
            },
            member: {
                select: {
                    name: true,
                },
            },
        },
    });
    // Format overdue records with calculated overdue days
    const overdueList = overdueRecords.map((record) => {
        const currentDate = new Date();
        const borrowDate = new Date(record.borrowDate);
        const dueDate = new Date(borrowDate.getTime() + maxBorrowTime);
        const overdueDays = Math.floor((currentDate.getTime() - dueDate.getTime()) / (24 * 60 * 60 * 1000));
        return {
            borrowId: record.borrowId,
            bookTitle: record.book.title,
            borrowerName: record.member.name,
            overdueDays: overdueDays,
        };
    });
    return overdueList;
});
exports.borrowReturnService = {
    borrowABook,
    returnABook,
    borrowOverdueList,
};
