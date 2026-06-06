import express from "express";
import {
  addToCart,
  getCart,
  removeCartProduct,
  changeQuantity,
} from "../controllers/cartController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/add-to-cart", verifyToken, addToCart);
router.get("/get-cart-items", verifyToken, getCart);
router.delete("/remove-cart-product/:id", verifyToken, removeCartProduct);
router.put("/change-quantity/:id", verifyToken, changeQuantity);

export default router;
