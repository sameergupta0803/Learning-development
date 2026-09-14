'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useState,useEffect } from "react"
import toast from 'react-hot-toast';
const Signup = () => {
  const [user,setUser]=useState({
    email:"",
    username:"",
    password:"",
  })
  const [loading,setLoading]=useState(false)
  const[buttonDisabled,setButtonDisabled]=useState(true)
  const router=useRouter()
  useEffect(()=>{
    if(user.email.length>0 && user.username.length>0 && user.password.length>0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  }, [user])
  const onSignUp=async()=>{
    try {
      setLoading(true)
      const response=await axios.post("/api/users/signup",user)
      toast.success(response.data.message || "User created successfully")
      console.log(response.data)
      router.push("/login")
    } catch (error:any) {
      toast.error( error.response?.data?.error || "An error occurred during signup")
      console.error("Error signing up:", error.response?.data || error.message)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading?"Signing up...":"Sign Up"}</h1>
      <label 
      className='block text-white-700 text-sm font-bold mb-2'
      htmlFor="username">Username</label>
      <input
        className='p-4 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
        type="text"
        id="username"
        placeholder="Username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label 
      className='block text-white-700 text-sm font-bold mb-2'
      htmlFor="email">Email</label>
      <input
        className='p-4 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
        type="email"
        id="email"
        placeholder="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label 
      className='block text-white-700 text-sm font-bold mb-2'
      htmlFor="password">Password</label>
      <input
        className='p-4 border border-gray-300 bg-white rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black'
        type="password"
        id="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onSignUp} >
        {buttonDisabled ? "Please fill all fields" : "Sign Up"}
      </button>
      <Link href="/login" className='text-blue-500 hover:text-blue-700'>
        Already have an account? Login
      </Link>
    </div>
  )
}

export default Signup