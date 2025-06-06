import { Router } from "express";
import { borrowReturnController } from "./borrowReturn.controller";

const borrowReturnRouter = Router();

borrowReturnRouter.get(
  "/borrow/overdue",
  borrowReturnController.borrowOverdueList
);
borrowReturnRouter.post("/borrow", borrowReturnController.borrowABook);
borrowReturnRouter.post("/return", borrowReturnController.returnABook);


export default borrowReturnRouter;
