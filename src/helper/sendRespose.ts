import { Response } from "express";

const sendResponse = <T>(
  res: Response,
  jsonData: {
    statusCode: number;
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
  res.status(jsonData.statusCode).json(jsonData);
};
export default sendResponse;
