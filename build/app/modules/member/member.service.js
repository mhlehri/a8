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
exports.memberService = void 0;
const AppError_1 = __importDefault(require("../../../helper/AppError"));
const prisma_1 = __importDefault(require("../../../shared/prisma"));
/**
 * Member Service
 * Contains business logic for member management operations
 */
// Create a new member record in the database
const createMember = (data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data);
    const r = yield prisma_1.default.member.create({
        data,
    });
    return r;
});
// Retrieve all members from the database
const readAllMembers = () => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield prisma_1.default.member.findMany();
    return r;
});
// Find a specific member by their ID
const readMemberById = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    const r = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    return r;
});
// Update member information with validation
const updateMember = (memberId, data) => __awaiter(void 0, void 0, void 0, function* () {
    // Check if member exists before updating
    const isExits = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!isExits) {
        throw new AppError_1.default(404, "Member doesn't exits");
    }
    const r = yield prisma_1.default.member.update({
        where: {
            memberId,
        },
        data,
    });
    return r;
});
// Delete a member with existence validation
const deleteMember = (memberId) => __awaiter(void 0, void 0, void 0, function* () {
    // Verify member exists before deletion
    const isExits = yield prisma_1.default.member.findUnique({
        where: {
            memberId,
        },
    });
    if (!isExits) {
        throw new AppError_1.default(404, "Member doesn't exits");
    }
    const r = yield prisma_1.default.member.delete({
        where: {
            memberId,
        },
    });
    return r;
});
exports.memberService = {
    createMember,
    readAllMembers,
    readMemberById,
    updateMember,
    deleteMember,
};
