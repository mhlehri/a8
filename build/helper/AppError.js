"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
}
exports.default = AppError;
