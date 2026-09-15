import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import User from "@/models/userModel";
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = await bcrypt.hash(userId.toString(), 10);
    if(emailType === "VERIFY"){
      await User.findByIdAndUpdate(userId, { verifyToken: hashedToken, verifyTokenExpiry: Date.now() + 3600000 });
    }
    else if(emailType === "RESET"){
      await User.findByIdAndUpdate(userId, { forgotPasswordToken: hashedToken, forgotPasswordTokenExpiry: Date.now() + 3600000 });
    }
    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILTRAP_USER,
        pass: process.env.MAILTRAP_PASS,
      },
    });
    const mailOptions = {
      from: "sameer@gmail.com", 
      to: email, 
      subject:emailType === "VERIFY" ? "Verify your email" : "Reset your password", 
      html: `<p>Click <a href="${process.env.DOMAIN}/${emailType=== "VERIFY" ? "verifyemail" : "changepassword"}?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/${emailType=== "VERIFY" ? "verifyemail" : "changepassword"}?token=${hashedToken}
            </p>`
    };
    const mailResponse = await transporter.sendMail(mailOptions);
    console.log("Email sent: ", mailResponse);
    return mailResponse;
  } catch (error: any) {
    throw new Error("Error sending email: " + error.message);
  }
};
