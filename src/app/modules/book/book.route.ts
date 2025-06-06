import { Router } from "express";
import { bookController } from "./book.controller";

const bookRouter = Router();

bookRouter.get("/", bookController.readAllBooks);
bookRouter.get("/:id", bookController.readBookById);
bookRouter.post("/", bookController.createBook);
bookRouter.patch("/:id", bookController.updateBook);
bookRouter.delete("/", bookController.deleteBook);

export default bookRouter;
