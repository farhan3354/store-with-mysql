import express from "express";
import {
  addProduct,
  getIdProduct,
  getProduct,
} from "../controllers/productController.js";
import { upload } from "../utils/cloudinary.js";
import { requireAdmin, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
  "/add-product",
//   verifyToken,
//   requireAdmin,
  upload.single("image"),
  addProduct,
);

router.get("/get-product", getProduct);
router.get("/get-product/:id", getIdProduct);

router.put(
  "/update-product/:id",
  verifyToken,
  requireAdmin,
  upload.single("image"),
  addProduct,
);

router.delete("/delete-product/:id", verifyToken, requireAdmin, addProduct);

export default router;
