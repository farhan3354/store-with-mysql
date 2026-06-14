import express from "express";
import {
  createOrder,
  getOrders,
  updateOrder,
  getAllOrders,
  changeOrderStatus
} from "../controllers/orderController.js";
import { verifyToken } from "./../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create", verifyToken, createOrder);
router.get("/myorders", verifyToken, getOrders);
router.put("/update/:id", verifyToken, updateOrder);
router.get("/all", verifyToken, getAllOrders);
router.put("/status/:id", verifyToken, changeOrderStatus);

export default router;
