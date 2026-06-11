import { createOrderTable } from "../database/orderTable.js";

export const createOrder = async (req, res) => {
  try {
    const { userid } = req.userId;
    const { productid } = req.params;
    const { quantity } = req.body;
    if (!userid || !productid || !quantity) {
      return res.status(400).json({
        success: false,
        message: "User ID, Product ID and quantity are required",
      });
    }
    const [result] = await Pool.query(
      "Insert into orderstable (userid, productid, quantity) values (?, ?, ?)",
      [userid, productid, quantity],
    );
    return res.status(201).json({
      success: true,
      message: "Order created successfully",
      orderId: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const { userid } = req.userId;
    if (!userid) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }
    const [orders] = await Pool.query(
      "Select o.id,o.quantity,o.orderdate,p.productid,p.name,p.description,p.price,p.imageurl from orderstable o join productstable p on o.productid=p.id where o.userid=?",
      [userid],
    );
    return res.status(200).json({ success: true, orders });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
