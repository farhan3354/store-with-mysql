import { Pool } from "../configs/databaseConnection.js";

export const cartTable = async () => {
  try {
    const cartTable = `Create table if not exists cart (
            id int auto_increment primary key,
            userid int not null,
            productid int not null,
            quantity int not null,
            created_at timestamp default current_timestamp,
            updated_at timestamp default current_timestamp on update current_timestamp,
            foreign key (userid) references users(id),
            foreign key (productid) references productstable(id)      
            )`;
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
