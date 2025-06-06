import { NextFunction, Request, RequestHandler, Response } from "express";

const CatchAsync = (
  fn: RequestHandler
): ((req: Request, res: Response, next: NextFunction) => void) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
};

export default CatchAsync;
