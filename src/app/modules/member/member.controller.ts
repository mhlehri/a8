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

const readAllMembers = () => {};
const readMemberById = () => {};
const updateMember = () => {};
const deleteMember = () => {};

export const memberController = {
  createMember,
  readAllMembers,
  readMemberById,
  updateMember,
  deleteMember,
};
