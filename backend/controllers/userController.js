import { Pool } from "../configs/databaseConnection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const addUser = async (req, res) => {
  try {
    const { email, password, name, phone } = req.body;

    if (!email || !password || !name || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const [existingUser] = await Pool.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
    );

    if (existingUser.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    console.log("Generated hash length:", hashedPassword.length);

    const [result] = await Pool.query(
      "INSERT INTO users (email, password, name, phone) VALUES (?, ?, ?, ?)",
      [email, hashedPassword, name, phone],
    );

    return res.status(201).json({
      message: "User registered successfully",
      userId: result.insertId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    const [rows] = await Pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.userid, email: user.email },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1h" },
    );

    return res.status(200).json({
      message: "Login successful",
      token,
      user: {
        userId: user.userid,
        email: user.email,
        name: user.name,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

// Get all users (optional)
export const getUsers = async (req, res) => {
  try {
    const [rows] = await Pool.query(
      "SELECT userid, name, email, phone, role, created_at FROM users",
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json({ users: rows });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get single user by ID
export const getUserById = async (req, res) => {
  try {
    const { userid } = req.params;
    const [rows] = await Pool.query(
      "SELECT userid, name, email, phone, role, created_at FROM users WHERE userid = ?",
      [userid],
    );

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user: rows[0] });
  } catch (error) {
    console.error("Error fetching user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updatePassword = async (req, res) => {
  try {
    const { email, oldpassword, newpassword } = req.body;
    const [row] = await Pool.query("Select * from users where email = ?", [
      email,
    ]);
    if (row.length == 0) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const user = row[0];
    const MachPassword = await bcrypt.compare(oldpassword, user.password);
    if (!MachPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid credentials" });
    }
    const newPassword = await generatesalt(newpassword);
    const [updateRow] = await Pool.query(
      "Update users set password = ? where email = ?",
      [newPassword, email],
    );
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};
