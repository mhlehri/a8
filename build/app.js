"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./app/routes"));
const handleError_1 = __importDefault(require("./middleware/handleError"));
const handle404Error_1 = __importDefault(require("./middleware/handle404Error"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api", routes_1.default);
// global error handler middleware
app.use(handleError_1.default);
// not found error handler middleware
app.use(handle404Error_1.default);
exports.default = app;
