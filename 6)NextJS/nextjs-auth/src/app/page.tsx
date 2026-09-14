'use client'
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      
      <h1 className="text-2xl font-bold mb-4">Welcome to the Next.js Auth App</h1>
      <p className="mb-4">
        This is a simple authentication app built with Next.js, MongoDB, and JWT.
      </p>
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login
        </Link>
        <Link 
          href="/signup"
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Signup
        </Link>
        <Link 
          href="/profile"
          className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600"
        >
          Profile
        </Link>
      </div>  


    </div>
  );
}
