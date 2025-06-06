import cors from "cors";
import express, { Application } from "express";
import appRouter from "./app/routes";
import handleError from "./middleware/handleError";
import handle404Error from "./middleware/handle404Error";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Library Management System API",
    data: {
      name: "Library Management System API",
      version: "1.0.0",
      description:
        "An API for managing library books, members, and borrowing operations.",
    },
  });
});

app.use("/api", appRouter);
// global error handler middleware
app.use(handleError);
// not found error handler middleware
app.use(handle404Error);

export default app;
