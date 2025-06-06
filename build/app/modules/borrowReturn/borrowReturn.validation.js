"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodReturnSchema = exports.zodBorrowSchema = void 0;
const zod_1 = require("zod");
exports.zodBorrowSchema = zod_1.z.object({
    bookId: zod_1.z.string(),
    memberId: zod_1.z.string(),
});
exports.zodReturnSchema = zod_1.z.object({
    borrowId: zod_1.z.string(),
});
