import React, { useContext } from 'react'
import {ThemeDataContext} from '../context/ThemeContext'
const Button = () => {
    const [theme,setTheme]=useContext(ThemeDataContext)
    const changeTheme=()=>{
        setTheme((prev)=>{
            if(prev==='dark')return 'light'
            return 'dark'
        })
    }
    
  return (
    <div>
        <button onClick={changeTheme}
        className='px-3 py-6 mt-5 absolute left-1/2 -translate-x-1/2 bg-green-500 font-semibold rounded-xl text-xl'>
        Change Theme
        </button>
    </div>
  )
}

export default Button