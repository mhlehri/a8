import { Router } from "express";

const appRouter = Router();

const routes = [
  {
    path: "/book",
  },
  {
    path: "/member",
  },
];

routes.forEach((_r) => {
  appRouter.use(_r.path);
});

export default appRouter;
