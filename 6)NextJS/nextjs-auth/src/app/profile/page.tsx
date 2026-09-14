'use client'
import { useEffect,useState } from "react"
import {useRouter} from "next/navigation"
import axios from "axios"
import toast from "react-hot-toast"
import Link from "next/link"
const Profile = () => {
  const router=useRouter()
  const [userId,setUserId]=useState('')
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
  const getUserId=async()=>{
    try {
      const response=await axios.get("/api/users/me")
      setUserId(response.data.user._id)
    } catch (error:any) {
      toast.error(error.response?.data?.error || "Error fetching user data");
      console.error("Error fetching user data:", error.response?.data?.error || error.message);
    }
  }
  useEffect(()=>{
    getUserId()
  },[])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      {userId && <Link href={`/profile/${userId}`} className="text-blue-500 hover:underline" >
        User ID: {userId}
      </Link>}
      <p>This is your profile page.</p>
      <button
        className="mt-4 px-4 py-2 mt-4 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={logout}>
        Logout
      </button>
      <button onClick={getUserId} className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
        Refresh User ID
      </button>
    </div>
  )
}

export default Profile