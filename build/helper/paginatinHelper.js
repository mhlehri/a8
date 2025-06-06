"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculatePagination = void 0;
const calculatePagination = (options) => {
    const limit = options.limit ? Number(options.limit) : 10;
    const page = options.page ? Number(options.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = options.sortBy || "createdAt";
    const sortOrder = options.sortOrder || "desc";
    return {
        limit,
        page,
        skip,
        sortBy,
        sortOrder,
    };
};
exports.calculatePagination = calculatePagination;
