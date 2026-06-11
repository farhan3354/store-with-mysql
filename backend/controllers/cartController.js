import { Pool } from "../configs/databaseConnection.js";

export const addToCart = async (req, res) => {
  try {
        const { quantity } = req.body;
        const { productid } = req.params;
        
        const userid = req.user?.id || req.user?.userId;  
        if (!userid) {
            return res.status(401).json({ 
                success: false, 
                message: "User not authenticated" 
            });
        }
        const quantityNum = parseInt(quantity);
        if (!productid || !quantityNum || quantityNum <= 0) {
            return res.status(400).json({ 
                success: false, 
                message: "Product ID and valid quantity are required" 
            });
        }
        const [checkProduct] = await Pool.query(
            "SELECT id FROM productstable WHERE id = ?",
            [productid]
        );
        if (checkProduct.length === 0) {
            return res.status(404).json({ 
                success: false, 
                message: "Product not found" 
            });
        }
        const [checkCart] = await Pool.query(
            "SELECT * FROM cart WHERE userid = ? AND productid = ?",
            [userid, productid]
        );
        
        if (checkCart.length > 0) {
            const newQuantity = checkCart[0].quantity + quantityNum;
            await Pool.query(
                "UPDATE cart SET quantity = ? WHERE userid = ? AND productid = ?",
                [newQuantity, userid, productid]
            );
            return res.status(200).json({ 
                success: true, 
                message: "Cart updated successfully",
                data: { productid, quantity: newQuantity }
            });
        }
        await Pool.query(
            "INSERT INTO cart (userid, productid, quantity) VALUES (?, ?, ?)",
            [userid, productid, quantityNum]
        );
        
        return res.status(201).json({ 
            success: true, 
            message: "Product added to cart successfully",
            data: { productid, quantity: quantityNum }
        });
        
    } catch (error) {
        console.error("Add to cart error:", error);
        return res.status(500).json({ 
            success: false, 
            message: "Server error", 
            error: error.message 
        });
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
