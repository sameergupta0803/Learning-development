"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
export default function ChangePassword() {
  const router = useRouter();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const searchParams = useSearchParams();
  const token: any = searchParams.get("token") || "";
  const [loading, setLoading] = useState(false);
  const changePassword = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/changepassword", {
        oldPassword,
        newPassword,
        token,
      });
      toast.success(response.data.message);
      router.push("/login");
    } catch (error: any) {
      console.error(
        "Error changing password:",
        error.response?.data?.error || error.message,
      );
      toast.error("Error changing password");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {loading ? <h1>Changing password...</h1> : <h1>Change Password</h1>}
      <label
        className="block text-white-700 text-sm font-bold mb-2"
        htmlFor="oldPassword"
      >
        Old Password
      </label>
      <input
        className="p-4 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        id="oldPassword"
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
      />
      <label
        className="block text-white-700 text-sm font-bold mb-2"
        htmlFor="newPassword"
      >
        New Password
      </label>
      <input
        className="p-4 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        type="password"
        id="newPassword"
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <button
        onClick={changePassword}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Change Password
      </button>
    </div>
  );
}
