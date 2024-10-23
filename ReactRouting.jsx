import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Service from './Service'
import Contact from './Contact'
import Navbar from './Navbar'
import Page from './Page'


const ReactRouting = () => {
  return (
   <>
   <div className="container">
    <h1>REACT -ROUTING</h1>
  
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/service" element={<Service />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="*" element={<Page/>}/>
    </Routes>
    </BrowserRouter>
   </div>
   </>
  )
}

export default ReactRouting