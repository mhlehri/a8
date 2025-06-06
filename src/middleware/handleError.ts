import { NextFunction, Request, RequestHandler, Response } from "express";
import { PrismaClientKnownRequestError } from "../generated/prisma/runtime/library";

const handleError = (
  err: Error & PrismaClientKnownRequestError & { status?: number },
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  const isDuplicate = err?.code === "P2002";
  const code = isDuplicate ? 409 : err.status || 500;
  res.status(code).json({
    success: false,
    status: code,
    message: isDuplicate
      ? `${err.meta?.target} already exits`
      : err.message || "Internal Server Error",
  });
};

export default handleError;
