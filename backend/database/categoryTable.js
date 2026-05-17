import { Pool } from "../configs/databaseConnection.js";

export const catergoryTable = async () => {
  try {
    await Pool.query(
      `Create table if not exists categories(
                id int auto_increment primary key,
                name varchar(25) not null unique,
                description varchar(255) not null,
                created_at timestamp default current_timestamp,
                updated_at timestamp default current_timestamp on update current_timestamp
            )`,
    );
    console.log("Categories table created successfully");
  } catch (error) {
    console.error("Error creating the category table:", error);
  }
};

export const dropCategoryTable = async () => {
  try {
    await Pool.query("drop table if exists categories");
    console.log("Categories table dropped successfully");
  } catch (error) {
    console.error("Error dropping the category table:", error);
  }
};
