"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle404Error = (req, res, next) => {
    res.status(404).json({
        success: false,
        status: 404,
        message: `Your requested resource (${req.originalUrl}) could not be found.`,
    });
};
exports.default = handle404Error;
