import express from "express";
import dotenv from "dotenv";
import { Pool } from "./configs/databaseConnection.js";
import userRoute from "./routes/userRoute.js";
import { Users, updateTable } from "./database/userTable.js";
import { catergoryTable } from "./database/categoryTable.js";
import { ProductsTable } from "./database/productTable.js";
dotenv.config();

const app = express();
const port = process.env.Port || 8000;

// Users();
// updateTable();
// catergoryTable();
// ProductsTable();
// updateProductTable();

app.use(express.json());

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
