import { NextFunction, Request, Response } from "express";

export const isIdANumber = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (+req.params.id) {
    next();
  } else {
    res.sendStatus(422);
  }
};
