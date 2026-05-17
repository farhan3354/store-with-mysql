import { Pool } from "../configs/databaseConnection.js";

const addProduct=async(req,res)=>{
    try {
        const {name,description,price,stock,category_id}=req.body;
    } catch (error) {
        return res.status(500).json({message:"Server error"});
    }
}