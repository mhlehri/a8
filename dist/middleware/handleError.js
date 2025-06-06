"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleError = (err, _req, res, _next) => {
    var _a;
    const isDuplicate = (err === null || err === void 0 ? void 0 : err.code) === "P2002";
    const code = isDuplicate ? 409 : err.status || 500;
    res.status(code).json({
        success: false,
        status: code,
        message: isDuplicate
            ? `${(_a = err.meta) === null || _a === void 0 ? void 0 : _a.target} already exits`
            : err.message || "Internal Server Error",
    });
};
exports.default = handleError;
