import express from "express";
import { addProduct, getIdProduct, getProduct } from "../controllers/productController.js";
import { upload } from "../utils/cloudinary.js";

const router = express.Router();

router.post("/add-product", upload.single("image"), addProduct);

router.get("/get-product", getProduct);
router.get("/get-product/:id", getIdProduct);


export default router;
