import { Pool } from "../configs/databaseConnection.js";

export const ProductsTable = async () => {
  try {
    await Pool.query(
      `Create table if not exists products(
                id int auto_increment primary key,
                name varchar(25) not null,
                description varchar(255) not null,
                price decimal(10,2) not null,
                stock_quantity INT NOT NULL,
                category_id int not null,
                created_at timestamp default current_timestamp,
                updated_at timestamp default current_timestamp on update current_timestamp,
                FOREIGN KEY (category_id) REFERENCES categories(id)
            )`,
    );
    console.log("Products table created successfully");
  } catch (error) {
    console.error("Error creating products table:", error);
  }
};

export const updateProductTable = async () => {
  try {
    await Pool.query(
      "Alter table products add constraint fk_category foreign key (category_id) references categories(id)",
    );
    console.log("Products table updated successfully");
  } catch (error) {
    console.error("Error updating products table:", error);
  }
};
