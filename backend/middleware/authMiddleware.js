import { Pool } from "../configs/databaseConnection.js";
import jwt from "jsonwebtoken";

export const authenticate = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const [rows] = await Pool.query(
      "SELECT id, email, role, is_active FROM users WHERE id = ?",
      [decoded.id || decoded.userId],
    );

    if (rows.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    if (rows[0].is_active === 0) {
      return res.status(401).json({ message: "Account disabled" });
    }
    req.user = {
      id: rows[0].id,
      email: rows[0].email,
      role: rows[0].role,
    };

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Token expired" });
    }

    console.error("Auth error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const requireAdmin = async (req, res, next) => {
  try {
    if (!req.user || !req.user.id) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const userId = req.user.id;
    const [rows] = await Pool.query(
      'SELECT id, role, is_active FROM users WHERE id = ? AND role = "admin"',
      [userId],
    );

    if (rows.length === 0) {
      return res.status(403).json({
        message: "Access denied. Admin privileges required.",
      });
    }
    req.isAdmin = true;
    req.userRole = rows[0].role;

    next();
  } catch (error) {
    console.error("Admin middleware error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

export const requireUser = async (req, res, next) => {
  try {
    const userId = req.user.id || req.user.userId;
    const [rows] = await Pool.query(
      "SELECT id, role FROM users WHERE id = ? AND role = 'user'",
      [userId],
    );
    if (rows.length === 0) {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin privileges required.",
      });
    }

    req.userId = userId;
    req.userRole = rows[0].role;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ success: false, message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ success: false, message: "Token expired" });
    }

    console.error("Admin auth error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};
