'use client'
import Link from "next/link"
import { useRouter } from "next/navigation"
import axios from "axios"
import { useState,useEffect } from "react"
import toast from 'react-hot-toast';
const Login = () => {
  const [user,setUser]=useState({
    email:"",
    password:"",
  })
  const [loading,setLoading]=useState(false)
  const[buttonDisabled,setButtonDisabled]=useState(true)
  const router=useRouter()
  useEffect(()=>{
    if(user.email.length>0  && user.password.length>0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true)
    }
  }, [user])
  const onLogin=async()=>{
    try {
      setLoading(true)
      const response=await axios.post("/api/users/login",user)
      toast.success(response.data.message || "User logged in successfully")
      console.log(response.data)
      router.push("/profile")
    } catch (error:any) {
      toast.error( error.response?.data?.error || "An error occurred during login")
      console.error("Error logging in:", error.response?.data || error.message)
    }
    finally {
      setLoading(false)
    }
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>{loading?"Logging in...":"Login"}</h1>
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
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={onLogin}>
        {buttonDisabled ? "Please fill all fields" : "Login"}
      </button>
      <p className="mt-4 text-blue-500">Forgot your password? <Link href="/sendforgotpasswordemail" className='text-blue-300 hover:text-blue-700 underline'>Reset it</Link></p>
      <Link href="/signup" className='text-blue-500 hover:text-blue-700'>
        Don't have an account? Sign up
      </Link>
    </div>
  )
}

export default Login