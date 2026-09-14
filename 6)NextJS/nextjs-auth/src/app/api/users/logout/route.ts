import { NextResponse } from "next/server";
export async function GET() {
    const response= NextResponse.json(
        { message: "User logged out successfully", success: true },
        { status: 200 }
    );
    response.cookies.set("token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 0, // Expire the cookie immediately
    });
    return response;
}