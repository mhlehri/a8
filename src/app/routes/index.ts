import { Router } from "express";
import bookRouter from "../modules/book/book.route";
import memberRouter from "../modules/member/member.route";
import borrowReturnRouter from "../modules/borrowReturn/borrowReturn.route";

const appRouter = Router();

const routes = [
  {
    path: "/books",
    router: bookRouter,
  },
  {
    path: "/members",
    router: memberRouter,
  },
  {
    path: "/",
    router: borrowReturnRouter,
  },
];

routes.forEach((_r) => {
  appRouter.use(_r.path, _r.router);
});

export default appRouter;
