import { Router } from "express";
import { memberController } from "./member.controller";

const bookRouter = Router();

bookRouter.get("/", memberController.readAllMembers);
bookRouter.get("/:id", memberController.readMemberById);
bookRouter.post("/", memberController.createMember);
bookRouter.patch("/", memberController.updateMember);
bookRouter.delete("/", memberController.deleteMember);

export default bookRouter;
