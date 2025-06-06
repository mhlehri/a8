"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_route_1 = __importDefault(require("../modules/book/book.route"));
const member_route_1 = __importDefault(require("../modules/member/member.route"));
const borrowReturn_route_1 = __importDefault(require("../modules/borrowReturn/borrowReturn.route"));
const appRouter = (0, express_1.Router)();
const routes = [
    {
        path: "/books",
        router: book_route_1.default,
    },
    {
        path: "/members",
        router: member_route_1.default,
    },
    {
        path: "/",
        router: borrowReturn_route_1.default,
    },
];
routes.forEach((_r) => {
    appRouter.use(_r.path, _r.router);
});
exports.default = appRouter;
