import express from "express";
import { addProduct } from "../controllers/productController.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

router.post("/add-product", upload.single("image"), addProduct);

export default router;
