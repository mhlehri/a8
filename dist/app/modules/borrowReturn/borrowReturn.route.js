"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrowReturn_controller_1 = require("./borrowReturn.controller");
const borrowReturnRouter = (0, express_1.Router)();
borrowReturnRouter.get("/borrow/overdue", borrowReturn_controller_1.borrowReturnController.borrowOverdueList);
borrowReturnRouter.post("/borrow", borrowReturn_controller_1.borrowReturnController.borrowABook);
borrowReturnRouter.post("/return", borrowReturn_controller_1.borrowReturnController.returnABook);
exports.default = borrowReturnRouter;
