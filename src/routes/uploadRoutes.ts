import express from "express";
import { upload,uploadToS3 } from "../controllers/uploadControllers";
const router = express.Router();

router.post("/upload", upload.single("file"), uploadToS3);

export {router as uploadRouter}