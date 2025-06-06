"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sendResponse = (res, jsonData) => {
    res.status(jsonData.status).json(jsonData);
};
exports.default = sendResponse;
