import { Request, Response } from "express";

export const uploadCsvController = (req: Request, res: Response) => {
  res.status(200).json({ success: true, countObj: req.body.data.length });
};
