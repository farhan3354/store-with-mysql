import { Pool } from "../configs/databaseConnection.js";

export const addCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required" });
    }
    const [existrecord] = await Pool.query(
      "select * from categories where name=?",
      [name],
    );
    if (existrecord.length > 0) {
      return res.status(400).json({ message: "Category already exists" });
    }
    const [addrecord] = await Pool.query(
      "insert into categories(name,description) values(?,?)",
      [name, description],
    );
    if (addrecord.affectedRows > 0) {
      return res.status(201).json({ message: "Category added successfully" });
    }
    return res.status(500).json({ message: "Failed to add category" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getCategories = async (req, res) => {
  try {
    const [categories] = await Pool.query("select * from categories");
    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }
    return res.status(200).json({ category: categories });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const getIdCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const [category] = await Pool.query("select * from categories where id=?", [
      id,
    ]);
    if (category.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    return res.status(200).json({ category: category[0] });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;
    if (!name || !description) {
      return res
        .status(400)
        .json({ message: "Name and description are required" });
    }
    const [existrecord] = await Pool.query(
      "select * from categories where name=? and id!=?",
      [name, id],
    );
    const [updaterecord] = await Pool.query(
      "update categories set name=?,description=? where id=?",
      [name, description, id],
    );
    if (existrecord.length > 0) {
      return res.status(400).json({ message: "Category name already exists" });
    }
    if (updaterecord.affectedRows > 0) {
      return res.status(200).json({ message: "Category updated successfully" });
    }
    return res.status(404).json({ message: "Category not found" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const [deleterecord] = await Pool.query(
      "delete from categories where id=?",
      [id],
    );
    if (deleterecord.affectedRows > 0) {
      return res.status(200).json({ message: "Category deleted successfully" });
    }
    return res.status(404).json({ message: "Category not found" });
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};
