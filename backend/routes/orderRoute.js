import express from "express";
import { createOrder, getOrders, updateOrder } from "../controllers/orderController.js";
import { verifyToken } from './../middleware/authMiddleware.js';

const router = express.Router();

router.post("/create",verifyToken, createOrder);
router.get("/myorders", verifyToken, getOrders);
router.put("/update/:id", verifyToken, updateOrder);

export default router;
