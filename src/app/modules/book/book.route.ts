import { Router } from "express";

const userRouter = Router();

userRouter.get("/");
userRouter.get("/:id");
userRouter.post("/");
userRouter.patch("/");
userRouter.delete("/");

export default userRouter;
