import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Button from './components/Button'
import { ThemeDataContext } from './context/ThemeContext'
import './App.css'
const App = () => {
  const [theme] =useContext(ThemeDataContext)
  return (
    <div className={`${theme} h-screen`}>
      <Navbar/>
      <Button/>
    </div>
  )
}

export default App