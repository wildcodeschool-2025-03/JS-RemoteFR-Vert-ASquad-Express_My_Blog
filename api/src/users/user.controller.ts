import { Request, Response } from "express";

const login = (req: Request, res: Response) => {
  res.status(200).json({ email: req.body.email, isConnected: true });
};

export { login };
