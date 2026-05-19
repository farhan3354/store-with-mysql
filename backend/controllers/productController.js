import { Pool } from "../configs/databaseConnection.js";
import { uploadToCloudinary } from "../utils/cloudinary.js";

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, stock, category_id } = req.body;

    if (!name || !description || !price || !stock || !category_id) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const [checkproduct] = await Pool.query(
      "Select * from productstable where name = ?",
      [name],
    );

    if (checkproduct.length > 0) {
      return res
        .status(400)
        .json({ success: false, message: "product already exists" });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "product image is required" });
    }

    // const imageurl = req.file.path;

    // with multer-storage-cloudinary
    const uploadedImage = await uploadToCloudinary(
      req.file.buffer,
      "productImages",
    );

    const imageurl = uploadedImage.url;

    await Pool.query(
      `Insert into productstable 
      (name, description, price, stock_quantity, imageurl, category_id)
      values (?, ?, ?, ?, ?, ?)`,
      [name, description, price, stock, imageurl, category_id],
    );

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      imageurl,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Server error", error: error.message });
  }
};

export const getProduct = async (req, res) => {
  try {
    const [products] = await Pool.query("Select * from productstable");
    if (products.length <= 0) {
      return res.status(404).json({ message: "No products found" });
    }
    return res.status(200).json({ success: true, products: products });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
