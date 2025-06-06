"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberController = void 0;
const AppError_1 = __importDefault(require("../../../helper/AppError"));
const CatchAsync_1 = __importDefault(require("../../../helper/CatchAsync"));
const sendRespose_1 = __importDefault(require("../../../helper/sendRespose"));
const member_service_1 = require("./member.service");
/**
 * Member Controller
 * Handles all HTTP requests related to member management operations
 */
// Register a new member in the library system
const createMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.createMember(req.body);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 201,
        message: "Member created successfully",
        data: result,
    });
}));
// Retrieve all registered members
const readAllMembers = (0, CatchAsync_1.default)((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield member_service_1.memberService.readAllMembers();
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: result.length > 0 ? "Members retrieved successfully" : "No Members found",
        data: result || [],
    });
}));
// Retrieve a specific member by their ID
const readMemberById = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberService.readMemberById(memberId);
    if (!result) {
        throw new AppError_1.default(404, "Member not found");
    }
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Member retrieved successfully",
        data: result,
    });
}));
// Update an existing member's information
const updateMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    const result = yield member_service_1.memberService.updateMember(memberId, req.body);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Member updated successfully",
        data: result,
    });
}));
// Remove a member from the library system
const deleteMember = (0, CatchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { memberId } = req.params;
    yield member_service_1.memberService.deleteMember(memberId);
    (0, sendRespose_1.default)(res, {
        success: true,
        status: 200,
        message: "Member successfully deleted",
    });
}));
exports.memberController = {
    createMember,
    readAllMembers,
    readMemberById,
    updateMember,
    deleteMember,
};
