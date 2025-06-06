import AppError from "../../../helper/AppError";
import CatchAsync from "../../../helper/CatchAsync";
import sendResponse from "../../../helper/sendRespose";
import { memberService } from "./member.service";

/**
 * Member Controller
 * Handles all HTTP requests related to member management operations
 */

// Register a new member in the library system
const createMember = CatchAsync(async (req, res) => {
  const result = await memberService.createMember(req.body);

  sendResponse(res, {
    success: true,
    status: 201,
    message: "Member created successfully",
    data: result,
  });
});

// Retrieve all registered members
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

// Retrieve a specific member by their ID
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

// Update an existing member's information
const updateMember = CatchAsync(async (req, res) => {
  const { memberId } = req.params;
  const result = await memberService.updateMember(memberId, req.body);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member updated successfully",
    data: result,
  });
});

// Remove a member from the library system
const deleteMember = CatchAsync(async (req, res) => {
  const { memberId } = req.params;
  await memberService.deleteMember(memberId);

  sendResponse(res, {
    success: true,
    status: 200,
    message: "Member successfully deleted",
  });
});

export const memberController = {
  createMember,
  readAllMembers,
  readMemberById,
  updateMember,
  deleteMember,
};
