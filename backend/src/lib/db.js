import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

export const connectDb= async() =>{
    try{
        const status=await mongoose.connect(process.env.MONGODB_URI);
        console.log("mongodb connection: "+status.connection.host);
    }
    catch(error){
        console.log(error);
    }
}