import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse, NextRequest } from "next/server";
connectDB();
export async function POST(req: NextRequest) {
    try {
        const {token}=await req.json();
        const user = await User.findOne({ verifyToken: token , verifyTokenExpiry: { $gt: Date.now() } });
        
        if (!user) {
            return NextResponse.json({ error: "Invalid or expired token" }, { status: 400 });
        }
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();
        return NextResponse.json({ message: "Email verified successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error verifying email:", error);
        return NextResponse.json({ error: "Error verifying email" }, { status: 500 });
    }
}