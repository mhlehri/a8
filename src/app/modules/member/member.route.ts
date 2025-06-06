import { Router } from "express";
import { bookController } from "./member.controller";

const bookRouter = Router();

bookRouter.get("/", bookController.readAllBooks);
bookRouter.get("/:id", bookController.readBookById);
bookRouter.post("/", bookController.createBook);
bookRouter.patch("/", bookController.updateBook);
bookRouter.delete("/", bookController.deleteBook);

export default bookRouter;
