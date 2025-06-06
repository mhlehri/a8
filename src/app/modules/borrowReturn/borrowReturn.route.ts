import { Router } from "express";
import { memberController } from "./borrowReturn.controller";

const borrowReturnRouter = Router();

borrowReturnRouter.post("/borrow", memberController.readAllMembers);
borrowReturnRouter.post("/return", memberController.readMemberById);


export default borrowReturnRouter;
