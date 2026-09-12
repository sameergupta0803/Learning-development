import mongoose from 'mongoose'
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import config from '../config/config.js'
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        unique:[true,"Username must be unique"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email must be unique"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    }
})
userSchema.pre("save", async function () {
    if(!this.isModified("password")) return ;

    this.password = await bcrypt.hash(this.password, 10)
    return
})

userSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function(){
    return jwt.sign(
        {
            id: this._id,
        },
        config.ACCESS_TOKEN_SECRET,
        {
            expiresIn: config.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function(){
    return jwt.sign(
        {
            id: this._id,
            
        },
        config.REFRESH_TOKEN_SECRET,
        {
            expiresIn: config.REFRESH_TOKEN_EXPIRY
        }
    )
}
const userModel=mongoose.model('users',userSchema)
export default userModel