import { Pool } from "../configs/databaseConnection.js";

export const cartTable = async () => {
  try {
    const cartTable = `CREATE TABLE IF NOT EXISTS cart (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    productid INT NOT NULL,
    quantity INT NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,

    FOREIGN KEY (userid) REFERENCES users(userid) ON DELETE CASCADE,
    FOREIGN KEY (productid) REFERENCES productstable(id) ON DELETE CASCADE
)
`;

    await Pool.query(cartTable);
    console.log("Cart table created successfully in the data base");
  } catch (error) {
    console.log("Error creating the cart table");
  }
};

export const dropCartTable = async () => {
  try {
    await Pool.query("Drop table if exists cart");
    console.log("Cart table dropped successfully from the data base");
  } catch (error) {
    console.log("Error dropping the cart table");
  }
};
