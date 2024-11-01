import React from 'react'
import Nav from './Components/NavBar/Nav'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Contact from './Components/Contact us/Contact'
import Techstack from './Components/Techstack/Techstack'
import Project from './Components/Project/Project'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Techstack" element={<Techstack />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App