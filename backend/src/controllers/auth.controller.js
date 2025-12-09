import { GenerateJwt } from "../lib/utils.js";
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup= async (req,res) => {
    
    try{
        const {fullname,email,password}=req.body;
        if (!fullname || !email || !password) {
            return res.status(400).json({ message: "fullname, email, and password are required" });
        }

        if(password.length <6){
            return res.status(400).json({message: "password must be atleast of 6 character"});
        }

        const user= await User.findOne({email});
        if(user){
            return res.status(400).json({message: "Email already exist"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedpassword=await bcrypt.hash(password,salt);
        const newuser=new User({
            fullname:fullname,
            email:email,
            password:hashedpassword
        });
        if(newuser){
            await newuser.save();
            GenerateJwt(newuser._id,res);

            res.status(201).json({
                _id:newuser._id,
                fullname:newuser.fullname,
                email:newuser.email,
                password:newuser.password,
                profilepic:newuser.profilepic,
                createdAt:newuser.createdAt,
                updatedAt:newuser.updatedAt,
            })
        }
        else{
            return res.status(500).json({message:"Internal sever error"});
        }
    }
    catch(error){
        console.log(error)
        res.status(400).json({message:"error occured"});
    }
};
export const login= (req,res)=>{
    res.send("login route")
};
export const logout= (req,res)=> {
    res.send("logout route")
};