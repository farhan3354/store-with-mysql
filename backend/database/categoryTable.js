import { Pool } from "../configs/databaseConnection.js";

export const catergoryTable = async()=>{
    try {
        await Pool.query(
            `Create table if not exists categories(
                id int auto_increment primary key,
                name varchar(25) not null,
                description varchar(255) not null,
                created_at timestamp default current_timestamp,
                updated_at timestamp default current_timestamp on update current_timestamp
            )`
        );
        console.log("Categories table created successfully");
    } catch (error) {
        console.error("Error creating the category table:", error);
    }
}