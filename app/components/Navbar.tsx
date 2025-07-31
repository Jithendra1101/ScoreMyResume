import React from 'react'
import { Link } from 'react-router'



const Navbar = () => {
  return (

    <nav className="navbar">
      <Link to="/">
      <p className="test-3xl font-bold text-gradient">ScoreMyResume</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit"
      >Upload Resume</Link>
      
      
      
      </nav>
  )
}

export default Navbar