import React, { useEffect } from 'react'
import '../css/Home.css'
import axios from 'axios'

const Home = () => {
  
  
  return (
    <div className='hero'>
        <div className='hero-content'>
            <h1 className='hero-text'>Book House</h1>
            <p className='hero-description'>      {/*Message being printed on the Dashboard*/}
                Welcome to my Book Store! 
                Browse our collection of bestselling books. Enjoy reading.
            </p>
        </div>
        <div className="hero-image"></div>
    </div>
  )
}

export default Home;
