import { Pool } from "../configs/databaseConnection.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const generatesalt = async (password) => {
  const generatesalt = await bcrypt.genSalt(12, 10);
  const hashpassword = await bcrypt.hash(password, generatesalt);
  return hashpassword;
};

export const addUser = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    const passw = generatesalt(password);

    const [row] = await Pool.query(
      "Insert into users (name,email,phone,password) values (?,?,?,?)",
      [name, email, phone, passw],
    );
    if (row.affectedRows > 0) {
      jwt.sign(
        { id: row.insertId },
        process.env.JWT_SECRET || "defaultsecret",
        { expiresIn: "1h" },
        (err, token) => {
          if (err) {
            return res
              .status(500)
              .json({ message: "Error generating token", error: err.message });
          }

          return res
            .status(200)
            .json({ message: "User added successfully", token });
        },
      );
    } else {
      return res.status(400).json({ message: "Failed to add user" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

export const getUSers = async (req, res) => {
  try {
    const [row] = await Pool.query("Select * from users");
    if (row.length < 0) {
      return res.status(404).json({ message: "No user found" });
    }
    return res.status(200).json({ success: true, users: row });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const [row] = await Pool.query("Select * from users where email=?", [
      email,
    ]);
    if (row.length == 0) {
      return res.status(404).json({ message: "User not found" });
    }
    const user = row[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET || "defaultsecret",
      { expiresIn: "1h" },
      (err, token) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Error generating token", error: err.message });
        }

        return res.status(200).json({ message: "Login successful", token });
      },
    );
  } catch (error) {
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
