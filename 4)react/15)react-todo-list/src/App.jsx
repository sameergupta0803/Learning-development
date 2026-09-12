import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from './TodoList';
import Navbar from './Navbar';
export default function App() {
  return (
    <div>
      <CssBaseline />
      <Navbar />
      
      <TodoList />
    </div>
  )
}
