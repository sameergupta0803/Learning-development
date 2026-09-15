"use client";
import { useEffect, useState } from "react";
import {useSearchParams } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
export default function VerifyEmail() {

  const searchParams = useSearchParams();
  const token:any = searchParams.get("token")||"";
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);
  const verifyEmail = async () => {
    try {
        const response = await axios.post("/api/users/verifyemail", { token });
        setIsVerified(true);
        toast.success(response.data.message);
    } catch (error:any) {
        console.error("Error verifying email:", error.response?.data?.error || error.message);
        toast.error("Error verifying email");
        setError(true);
    }
    
  }
  useEffect(() => {
    if(token?.length > 0) {
        verifyEmail();
    }
  }, [token]);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {isVerified ? (
        <div>
          <h1>Email Verified</h1>
          <p>Your email has been verified successfully.</p>
          <Link href="/login">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </Link>
        </div>
      ) : error ? (
        <div>
          <h1>Error</h1>
          <p>There was an error verifying your email.</p>
          <Link href="/signup">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up Again
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <h1>Verifying Email...</h1>
          <p>Please wait while we verify your email.</p>
        </div>
      )}
    </div>
  );
}
