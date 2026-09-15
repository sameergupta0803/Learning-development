import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";
connectDB();
export async function POST(req: NextRequest) {
    try {
        const {oldPassword,newPassword,token}=await req.json();
        const user = await User.findOne({ forgotPasswordToken: token , forgotPasswordTokenExpiry: { $gt: Date.now() } });
        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }
        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return NextResponse.json({ error: "Old password is incorrect" }, { status: 400 });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        await user.save();
        return NextResponse.json({ message: "Password changed successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error changing password:", error);
        return NextResponse.json({ error: "Error changing password" }, { status: 500 });
    }
}