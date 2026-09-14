'use client'
import { useEffect } from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
const Profile = () => {
  const router=useRouter()
  const logout=async()=>{
    try {
      const response = await axios.get("/api/users/logout");
      toast.success(response.data.message);
      router.push("/login");
    } catch (error:any) {
      toast.error(error.response?.data?.error || "Error logging out");
      console.error("Error logging out:", error.response?.data?.error || error.message);
    }
    
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p>This is your profile page.</p>
      <button
        className="mt-4 px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Profile