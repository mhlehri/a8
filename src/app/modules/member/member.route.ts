import { Router } from "express";
import { memberController } from "./member.controller";

const memberRouter = Router();

memberRouter.get("/", memberController.readAllMembers);
memberRouter.get("/:id", memberController.readMemberById);
memberRouter.post("/", memberController.createMember);
memberRouter.patch("/", memberController.updateMember);
memberRouter.delete("/", memberController.deleteMember);

export default memberRouter;
