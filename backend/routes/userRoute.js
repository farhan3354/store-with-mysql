import express from "express";
import {
  getUsers,
  addUser,
  login,
  updatePassword,
} from "../controllers/userController.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Api is running");
});

route.post("/create", addUser);

route.get("/get", verifyToken, getUsers);

route.post("/login", login);

route.post("/update-password", verifyToken, updatePassword);

export default route;
