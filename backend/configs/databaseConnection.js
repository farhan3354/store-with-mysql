import mysql from "mysql2/promise";

export const Pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "gemstone",
  //   waitForConnections: true,
  //   connectionLimit: 10,
  //   queueLimit: 0,
  //   enableKeepAlive: true,
  //   keepAliveInitialDelay: 0,
});
Pool.getConnection()
  .then((connection) => {
    console.log("✅ Database connected successfully");
    connection.release();
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err.message);
  });

export const deleteDatabase = async () => {
  try {
    await Pool.query(`DROP DATABASE IF EXISTS ${process.env.DB_NAME}`);
    console.log("Database deleted successfully");
  } catch (error) {
    console.error("Error deleting database:", error);
  }
};
