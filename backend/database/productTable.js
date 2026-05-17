import { Pool } from "../configs/databaseConnection.js";

export const ProductsTable = async () => {
  try {
    const createTable = `
      CREATE TABLE IF NOT EXISTS productstable (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(25) NOT NULL,
        description VARCHAR(255) NOT NULL,
        price DECIMAL(10,2) NOT NULL,
        stock_quantity INT NOT NULL,
        imageurl VARCHAR(255) NOT NULL,
        category_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
          ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (category_id) REFERENCES categories(id)
      )
    `;

    await Pool.query(createTable);
    console.log("Products table created successfully");
  } catch (error) {
    console.error("Error creating products table:", error);
  }
};

export const updateProductTable = async () => {
  try {
    await Pool.query(
      "Alter table productstable add constraint fk_category foreign key (category_id) references categories(id)",
    );
    console.log("Products table updated successfully");
  } catch (error) {
    console.error("Error updating products table:", error);
  }
};
export const addImageField = async () => {
  try {
    await Pool.query(
      "Alter table productstable add imageurl varchar(255) not null",
    );
    console.log("Image field added successfully");
  } catch (error) {
    console.error("Error adding image field:", error);
  }
};
export const dropProductsTable = async () => {
  try {
    await Pool.query("drop table if exists productstable");
    console.log("Products table dropped successfully");
  } catch (error) {
    console.error("Error dropping products table:", error);
  }
};
