import { Router } from "express";
import bookRouter from "../modules/book/book.route";

const appRouter = Router();

const routes = [
  {
    path: "/book",
    router: bookRouter,
  },
];

routes.forEach((_r) => {
  appRouter.use(_r.path, _r.router);
});

export default appRouter;
