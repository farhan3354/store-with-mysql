import { Pool } from "../configs/databaseConnection.js";

export const createOrderTable = async () => {
  try {
    const createTableQuery = `CREATE TABLE IF NOT EXISTS orderstable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    userid INT NOT NULL,
    productid INT NOT NULL,
    quantity INT NOT NULL CHECK(quantity > 0),
    price int NOT NULL,
    total_amount int NOT NULL,
    status ENUM('pending','processing','shipped','delivered','cancelled') DEFAULT 'pending',
    orderdate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userid) REFERENCES users(userid),
    FOREIGN KEY (productid) REFERENCES 	productstable(id)
);
        `;
    await Pool.query(createTableQuery);
    console.log("Order table created successfully");
  } catch (error) {
    console.log(error);
  }
};

export const dropOrderTable = async () => {
  try {
    const dropTableQuery = `DROP TABLE IF EXISTS orderstable`;
    await Pool.query(dropTableQuery);
    console.log("Order table dropped successfully");
  } catch (error) {
    console.log(error);
  }
};
