import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { getUserIdFromToken } from "@/helpers/getUserIdFromToken";
import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";
connectDB();
export async function GET(req: NextRequest) {
    try {
        const userId:any = getUserIdFromToken(req);
        const user = await User.findById(userId).select("-password");
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }
        console.log(user)
        return NextResponse.json({ user }, { status: 200 });
    } catch (error:any) {
        return NextResponse.json({ error: error.message || "Invalid token" }, { status: 401 });
    }
}