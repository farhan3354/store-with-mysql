import { Pool } from "../configs/databaseConnection.js";

export const Users = async () => {
  try {
    await Pool.query(`CREATE TABLE IF NOT EXISTS users (
      userid INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,          
      email VARCHAR(255) NOT NULL UNIQUE,  
      password VARCHAR(255) NOT NULL,    
      phone VARCHAR(25) NOT NULL,       
      role ENUM('admin', 'user') DEFAULT 'user',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )`);
    console.log("✅ Table created successfully");
  } catch (error) {
    console.error("❌ Error creating users table:", error.message);
  }
};

export const updatePasswordColumn = async () => {
  try {
    await Pool.query(
      "ALTER TABLE users MODIFY COLUMN password VARCHAR(255) NOT NULL",
    );
    console.log("✅ Password column size increased to 255");
  } catch (error) {
    console.error("❌ Error updating password column:", error.message);
  }
};

export const updateOtherColumns = async () => {
  try {
    await Pool.query(
      "ALTER TABLE users MODIFY COLUMN name VARCHAR(255) NOT NULL",
    );
    await Pool.query(
      "ALTER TABLE users MODIFY COLUMN email VARCHAR(255) NOT NULL",
    );
    console.log("✅ Name and email columns updated");
  } catch (error) {
    console.error("❌ Error updating columns:", error.message);
  }
};
