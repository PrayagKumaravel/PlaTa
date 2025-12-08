import mongoose from "mongoose"

const userSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true,
        },
        fullname:{
            type:String,
            required:true,
        },
        pasword:{
            type:String,
            required:true,
            minlength:8,
            maxlength:12,
        },
        profilepic:{
            type:String
        },
    },
    {timestamp: true}
);

const user=mongoose.model("User",userSchema);
export default user;