import connectDB from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { sendEmail } from "@/helpers/mailer";
import { NextResponse, NextRequest } from "next/server";
connectDB();
export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 },
      );
    }
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User with this email does not exist" },
        { status: 404 },
      );
    }
    if(!user.isVerified){
      return NextResponse.json(
        { error: "User email is not verified" },
        { status: 400 },
      );
    }
    // Here you would typically generate a password reset token and send an email
    const mailResponse = await sendEmail({ email, emailType: "RESET", userId: user._id });
    return NextResponse.json({ message: "Password reset instructions sent" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
  }
}