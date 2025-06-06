import { Router } from "express";
import { bookController } from "./book.controller";

const bookRouter = Router();

bookRouter.get("/", bookController.readAllBooks);
bookRouter.get("/:bookId", bookController.readBookById);
bookRouter.post("/", bookController.createBook);
bookRouter.patch("/:bookId", bookController.updateBook);
bookRouter.delete("/:bookId", bookController.deleteBook);

export default bookRouter;
