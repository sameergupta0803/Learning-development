"use client";
import Link from "next/link";
import axios from "axios";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
const SendForgotPasswordEmail = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  useEffect(() => {
    if (email.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [email]);
  const onForgotPassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/sendforgotpasswordemail", {
        email,
      });
      toast.success(
        response.data.message || "Password reset instructions sent",
      );
      setIsEmailSent(true);
      console.log(response.data);
    } catch (error: any) {
      toast.error(error.response?.data?.error || "An error occurred");
      console.error("Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {isEmailSent ? (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Success! </strong>
          <span className="block sm:inline">
            Password reset instructions have been sent to your email.
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
          <h1>{loading ? "Sending reset link..." : "Forgot Password"}</h1>
          <label
            className="block text-white-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-4 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={onForgotPassword}
          >
            {buttonDisabled ? "Please fill the email" : "Send Reset Link"}
          </button>
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Don't have an account? Sign up
          </Link>
        </div>
      )}
    </div>
  );
};

export default SendForgotPasswordEmail;
