import AppError from "../../../helper/AppError";
import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { memberService } from "./member.service";

const createMember = CatchAsync(async (req, res) => {
  const result = await memberService.createMember(req.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Member created successfully",
    data: result,
  });
});

const readAllMembers = CatchAsync(async (_req, res) => {
  const result = await memberService.readAllMembers();

  sendResponse(res, {
    success: true,
    status: 200,
    message:
      result.length > 0 ? "Members retrieved successfully" : "No Members found",
    data: result || [],
  });
});

const readMemberById = CatchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.readMemberById(memberId);

  if (!result) {
    throw new AppError(404, "Member not found");
  }

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member retrieved successfully",
    data: result,
  });
});
const updateMember = CatchAsync(async (req, res) => {});
const deleteMember = CatchAsync(async (req, res) => {});

export const memberController = {
  createMember,
  readAllMembers,
  readMemberById,
  updateMember,
  deleteMember,
};
