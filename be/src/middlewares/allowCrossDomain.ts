import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

const allowCrossDomain = (req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", process.env.DOMAIN_FE);
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
};

export default allowCrossDomain;
