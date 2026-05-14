import express from "express";
import { getUSers, addUser } from "../controllers/userController.js";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Api is running");
});

route.post("/create", addUser);

route.get("/get", getUSers);

export default route;
