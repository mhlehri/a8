import { Response } from "express";

interface APPError extends Error {
  success: string;
  status: number;
  message: string;
}

export const AppError = (res: Response, data: APPError) => {
  const { success, status, message } = data;
  res.status(status).json({
    success,
    status,
    message,
  });
};
