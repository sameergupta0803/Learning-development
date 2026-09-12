import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Navbar from './components/Navbar'
import './App.css'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Course from './pages/Course'
import CourseDetails from './pages/CourseDetails'
import Nav2 from './components/Nav2'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Nav2/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/course' element={<Course/>} />
        <Route path='/course/:courseId' element={<CourseDetails/>} />
        <Route path='/Product' element={<Product/>} >
            <Route path='men' element={<Men/>} />
            <Route path='women' element={<Women/>} />
            <Route path='kids' element={<Kids/>} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App