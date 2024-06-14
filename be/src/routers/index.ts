import { Router } from "express";
import * as DataCSVController from "../controllers/DataCSVController";

const router = Router();

router.post("/upload", DataCSVController.uploadCsvController);

export default router;
