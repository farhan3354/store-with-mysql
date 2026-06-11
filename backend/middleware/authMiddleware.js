import { Pool } from "../configs/databaseConnection.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).json({ message: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const requireAdmin = async (req, res, next) => {
  try {
    const userId = req.user.id || req.user.userId;
    const [rows] = await Pool.query(
      "SELECT id, role FROM users WHERE id = ? AND role = 'admin'",
      [userId],
    );

    if (rows.length === 0) {
      return res.status(403).json({
        message: "Access denied. Admin privileges required.",
      });
    }

    req.userId = userId;
    req.userRole = rows[0].role;
    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid token" });
    }
    if (error.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Token expired" });
    }

    console.error("Admin auth error:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
