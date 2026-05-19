import express from "express";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getIdCategory,
} from "../controllers/categoryController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Category route");
});

route.post("/", verifyToken, addCategory);
route.get("/all", getCategories);
route.get("/:id", getIdCategory);
route.put("/:id", verifyToken, updateCategory);
route.delete("/:id", verifyToken, deleteCategory);

export default route;
