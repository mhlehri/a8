"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodBookSchema = void 0;
const zod_1 = require("zod");
exports.zodBookSchema = zod_1.z.object({
    title: zod_1.z.string(),
    genre: zod_1.z.string(),
    publishedYear: zod_1.z.number(),
    totalCopies: zod_1.z.number(),
    availableCopies: zod_1.z.number(),
});
