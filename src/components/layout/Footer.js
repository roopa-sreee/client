import React from 'react'

import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer text-warning'>
      <h4>All Rights Reserved &copy; Shiva Karthikeyan Stores </h4>
      <p className='text-center mt-3'>
        <Link to ="/about">About</Link>
        |
        <Link to ="/contact">Contact Us</Link>
        |
        <Link to = "/policy">Privacy Policy</Link>
      </p>
    </div>
  )
}

export default Footer
