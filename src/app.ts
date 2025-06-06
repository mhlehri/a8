import cors from "cors";
import express, { Application } from "express";
import appRouter from "./app/routes";
import handleError from "./middleware/handleError";
import handle404Error from "./middleware/handle404Error";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api", appRouter);
// global error handler middleware
app.use(handleError);
// not found error handler middleware
app.use(handle404Error);

export default app;
