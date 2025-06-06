import { Router } from "express";
import { memberController } from "./member.controller";

const memberRouter = Router();

memberRouter.get("/", memberController.readAllMembers);
memberRouter.get("/:memberId", memberController.readMemberById);
memberRouter.post("/", memberController.createMember);
memberRouter.patch("/:memberId", memberController.updateMember);
memberRouter.delete("/:memberId", memberController.deleteMember);

export default memberRouter;
