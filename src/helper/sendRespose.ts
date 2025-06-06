import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    success: boolean;
    status: number;
    message: string;
    meta?: {
      page?: number;
      limit?: number;
      total?: number;
    };
    data?: T | null | undefined;
    error?: Error | string | null | undefined;
  }
) => {
  res.status(jsonData.status).json(jsonData);
};
export default sendResponse;
