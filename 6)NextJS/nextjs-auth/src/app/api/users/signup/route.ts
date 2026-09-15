import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import {sendEmail} from "@/helpers/mailer";
import { NextResponse, NextRequest } from "next/server";
import bcrypt from "bcryptjs";

connectDB();
export async function POST(req: NextRequest) {
  try {
    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await user.save();

    const mailResponse = await sendEmail({ email, emailType: "VERIFY", userId: user._id });
    return NextResponse.json(
      { message: "User created successfully", success: true, savedUser },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
