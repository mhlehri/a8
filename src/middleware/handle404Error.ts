import { NextFunction, Request, Response } from "express";

const handle404Error = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({
    success: false,
    status: 404,
    message: `Your requested resource (${req.originalUrl}) could not be found.`,
  });
};

export default handle404Error;
