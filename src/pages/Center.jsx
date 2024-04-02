import React from 'react';
import './center.css';
import { Link } from 'react-router-dom';
import img from '../assets/center.webp'
import Header from '../components/Header';

function Center() {
  return (
    <>
      <Header/>
    <div className='d-flex'>
    
      <div className='d-flex justify-content-center'>
        <Link to='./sign' style={{ textDecoration: "none", color: "white" }}>
          <button className="video-button">
            
            <img src={img} alt="Button Image" className="img-fluid"
         /> {/* Add the image */}
            {/* Add content or icon inside the button if desired */}
          </button>
        </Link>
    
      </div>
   
    </div>
    </>
  
  );
}

export default Center;
