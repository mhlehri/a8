import { NextFunction, Request, RequestHandler, Response } from "express";

const handleError = (
  err: Error & { status?: number },
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  res.status(err.status || 500).json({
    success: false,
    status: err.status,
    message: err.message || "Internal Server Error",
  });
};

export default handleError;
