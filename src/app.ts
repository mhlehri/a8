import cors from "cors";
import express, { Application } from "express";

const app: Application = express();
app.use(cors());
app.use(express.json());

app.use("/api");

export default app;
