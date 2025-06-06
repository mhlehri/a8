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
exports.borrowReturnController = void 0;
const CatchAsync_1 = __importDefault(require("../../../helper/CatchAsync"));
const sendRespose_1 = __importDefault(require("../../../helper/sendRespose"));
const borrowReturn_service_1 = require("./borrowReturn.service");
/**
 * Borrow Return Controller
 * Handles all HTTP requests related to book borrowing and returning operations
 */
// Process book borrowing request
const borrowABook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowReturn_service_1.borrowReturnService.borrowABook(req.body);
    const resultData = {};
    if (result) {
        for (const key in result) {
            if (Object.prototype.hasOwnProperty.call(result, key)) {
                const typedKey = key;
                if (result[typedKey] !== null) {
                    resultData[typedKey] = result[typedKey];
                }
            }
        }
    }
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Book borrowed successfully",
        data: resultData,
    });
}));
// Process book return request
const returnABook = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowReturn_service_1.borrowReturnService.returnABook(req.body);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Book returned successfully",
    });
}));
// Retrieve list of overdue borrowed books
const borrowOverdueList = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield borrowReturn_service_1.borrowReturnService.borrowOverdueList();
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: result.length > 0 ? "Overdue borrow list fetched" : "No overdue books",
        data: result || [],
    });
}));
exports.borrowReturnController = {
    borrowABook,
    returnABook,
    borrowOverdueList,
};
