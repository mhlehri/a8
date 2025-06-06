import cors from "cors";
import express, { Application } from "express";
import appRouter from "./app/routes";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api", appRouter);

export default app;
