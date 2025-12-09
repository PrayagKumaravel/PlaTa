import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const GenerateJwt=(userid,res)=>{
    const token=jwt.sign(
        {userid},
        process.env.JWT_KEY,
        {expiresIn: "7d"},
    )
    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly:true,
        sameSite: "strict",
        secure: process.env.STAGE=="production",
    });
}