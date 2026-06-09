import { Pool } from "../configs/databaseConnection.js";

export const Users = async () => {
  try {
    await Pool.query(`CREATE TABLE IF NOT EXISTS users (
                userid INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(25) NOT NULL,
                email VARCHAR(25) NOT NULL UNIQUE,
                password VARCHAR(25) NOT NULL,
                role Enum("admin","user") DEFAULT "user",
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )`);
    console.log("table created successfully");
  } catch (error) {
    console.error("❌ Error creating users table:", error.message);
  }
};

export const updateTable = async () => {
  try {
    await Pool.query(
      "Alter table users add column phone varchar(25) not null after email",
    );
    console.log("table updated successfully");
  } catch (error) {
    console.error("❌ Error updating users table:", error.message);
  }
};

export const dropTable = async () => {
  try {
    await Pool.query("drop table if exists users");
    console.log("table dropped successfully");
  } catch (error) {
    console.error("❌ Error dropping users table:", error.message);
  }
};
