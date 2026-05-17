import express from "express";
import {
  addCategory,
  updateCategory,
  deleteCategory,
  getCategories,
  getIdCategory,
} from "../controllers/categoryController.js";
// import { verifyToken } from "../middlewares/authMiddleware.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Category route");
});

route.post("/", addCategory);
route.get("/all", getCategories);
route.get("/:id", getIdCategory);
route.put("/:id", updateCategory);
route.delete("/:id", deleteCategory);

export default route;
