import { Pool } from "../configs/databaseConnection.js";

export const createOrder = async (req, res) => {
  try {
    const userid = req.user?.id || req.body?.userid || req.query?.userid;
    const { productid } = req.body || req.query;
    const { quantity } = req.body;
    if (!userid) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }
    if (!productid) {
      return res.status(400).json({
        success: false,
        message: "Product ID is required",
      });
    }
    if (!quantity || quantity <= 0) {
      return res.status(400).json({
        success: false,
        message: "Valid quantity is required",
      });
    }
    const [product] = await Pool.query(
      "SELECT id,price,stock_quantity FROM productstable WHERE id = ?",
      [productid],
    );

    if (product.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (product[0].stock_quantity < quantity) {
      return res.status(400).json({
        success: false,
        message: "Insufficient stock",
      });
    }
    const price = product[0].price;
    const total_amount = price * quantity;
    const [result] = await Pool.query(
      "INSERT INTO orderstable (userid, productid, quantity, price, total_amount, orderdate) VALUES (?, ?, ?, ?, ?, NOW())",
      [userid, productid, quantity, price, total_amount],
    );
    await Pool.query("delete from cart where userid=? and productid=?", [
      userid,
      productid,
    ]);

    await Pool.query(
      "UPDATE productstable SET stock_quantity = stock_quantity - ? WHERE id = ?",
      [quantity, productid],
    );

    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      orderId: result.insertId,
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

export const getOrders = async (req, res) => {
  try {
    const userid = req.user?.id || req.body?.userid || req.query?.userid;
    if (!userid) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }
    const [orders] = await Pool.query(
      "Select o.id,o.quantity,o.orderdate,o.total_amount,p.id,p.name,p.description,p.price,p.imageurl from orderstable o join productstable p on o.productid=p.id where o.userid=?",
      [userid],
    );
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const updateOrder = async (req, res) => {
  try {
    const userid = req.user?.id || req.body?.userid || req.query?.userid;
    const { id } = req.params;
    const { quantity } = req.body;
    if (!id || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Order ID and quantity are required",
      });
    }
    await Pool.query(
      "Update orderstable set quantity=? where id=? and userid=?",
      [quantity, id, userid],
    );
    return res.status(200).json({
      success: true,
      message: "Order updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
