import React from 'react'
import './center.css'
import { Link } from 'react-router-dom'
import img from '../assets/front1.jpg'


function Center() {
   
      
  return (
<>
<div className=' d-flex mb-5 mt-5 p-5'></div>
<div className='d-flex'>
    <Link to='./sign' style={{ textDecoration: "none", color: "white" }}>
    <button class="video-button ">

{/* <h1 class='logo'><i class="fa-solid fa-music" style={{ color: "blue",marginLeft:"750px" }}></i> EVER ROCKING</h1> */}
                
 
</button>

    </Link>



</div>


</>
   


  

 
    
    
  
  )
}

export default Center