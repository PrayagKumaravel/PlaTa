import mongoose from "mongoose"

const userschema=new mongoose.Schema(
    {
        email:{
            type:String,
            required: true,
            unique: true,
        },
        fullname:{
            type:String,
            required:true,
            unique:false,
        },
        password:{
            type:String,
            required:true,
            unique:false,
            minlength: 8,
            maxlength: 12,
        },
        profilepic:{
            type:String,
            unique:false,
            required:false,
        },
    },
    {timestamps: true}
);
const users=mongoose.model("User",userschema);
export default users;