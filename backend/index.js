import express from "express";
import dotenv from "dotenv";
import { deleteDatabase, Pool } from "./configs/databaseConnection.js";
import userRoute from "./routes/userRoute.js";
import { Users, updatePasswordColumn } from "./database/userTable.js";
import { catergoryTable, dropCategoryTable } from "./database/categoryTable.js";
import categoryRoute from "./routes/categoryRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import { cartTable, dropCartTable } from "./database/cartTable.js";
import {
  addImageField,
  ProductsTable,
  dropProductsTable,
  updateProductTable,
} from "./database/productTable.js";
import orderRoute from "./routes/orderRoute.js";
import { createOrderTable, dropOrderTable } from "./database/orderTable.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.Port || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Users();
// updatePasswordColumn();
// dropTable();
// catergoryTable();
// dropCategoryTable();
// ProductsTable();
//  updateProductTable();
// dropProductsTable();
// cartTable();
// dropCartTable();
// deleteDatabase();
// createOrderTable();

app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
