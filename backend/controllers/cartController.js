import { Pool } from "../configs/databaseConnection.js";

export const addToCart = async (req, res) => {
  try {
    const { userid, productid, quantity } = req.body;
    if (!userid || !productid || !quantity) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }
    const [checkCart] = await Pool.query(
      "Select * from cart where userid=? and productid=?",
      [userid, productid],
    );
    if (checkCart.length > 0) {
      const newQuantity = checkCart[0].quantity + quantity;
      await Pool.query(
        "Update cart set quantity=? where userid=? and productid=?",
        [newQuantity, userid, productid],
      );
      return res
        .status(200)
        .json({ success: true, message: "Cart updated successfully" });
    }
    await Pool.query(
      "Insert into cart (userid,productid,quantity) values (?,?,?)",
      [userid, productid, quantity],
    );
    return res
      .status(201)
      .json({ success: true, message: "Product added to cart successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const getCart = async (req, res) => {
  try {
    const { userid } = req?.userId;
    if (!userid) {
      return res
        .status(400)
        .json({ success: false, message: "User ID is required" });
    }
    const [cart] = await Pool.query(
      "Select c.id,c.quantity,p.productid,p.name,p.description,p.price,p.imageurl from cart c join productstable p on c.productid=p.id where c.userid=?",
      [userid],
    );
    if (cart.length === 0) {
      return res.status(404).json({ success: false, message: "Cart is empty" });
    }
    return res.status(200).json({ success: true, cart });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const removeCartProduct = async (req, res) => {
  try {
    const { userid } = req.userId;
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ success: false, message: "Cart item ID is required" });
    }
    await Pool.query("Delete from cart where id=? and userid=?", [id, userid]);
    return res.status(200).json({
      success: true,
      message: "Product removed from cart successfully",
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const changeQuantity = async (req, res) => {
  try {
    const { userid } = req.userId;
    const { id } = req.params;
    const { quantity } = req.body;
    if (!id || !quantity) {
      return res.status(400).json({
        success: false,
        message: "Cart item ID and quantity are required",
      });
    }
    const [cartItem] = await Pool.query(
      "Select * from cart where id=? and userid=?",
      [id, userid],
    );
    if (cartItem.length === 0) {
      return res
        .status(404)
        .json({ success: false, message: "Cart item not found" });
    }
    await Pool.query("Update cart set quantity=? where id=? and userid=?", [
      quantity,
      id,
      userid,
    ]);
    return res
      .status(200)
      .json({ success: true, message: "Quantity updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
