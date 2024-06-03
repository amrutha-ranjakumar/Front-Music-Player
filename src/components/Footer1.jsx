import React from 'react';
import './footer.css'
import img from '../assets/footerimg1.jpg'
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { Contact } from './Contact';






function Footer1() {
  return (
    <>
    <body>
      <footer className='mt-5'>
        <div class="col mb-5 mt-5" id="contact ">
                <div style={{marginLeft:"190px",marginTop:"60px"}}>
                <h3 style={{marginLeft:"650px"}} >Contact</h3>
              <Contact/>
          <div class="container">
            <div class="row">
              <div class="col" id="company">
                <h5 style={{fontSize:"50px",marginLeft:"-160px",marginTop:"20px",color:"red"}}>    <i class="fa-solid fa-crown" style={{color:"red" ,fontSize:"30px"}}></i>   Ever Rocking    <i class="fa-solid fa-crown" style={{color:"red" ,fontSize:"30px"}}></i></h5>
                <img src={img} alt="" class="logo mt-5 " style={{ width: "400px", height: "200px", marginLeft: "-160px" }} />

                <div class="social">
                  <a href="#"><i class="fab fa-facebook"></i></a>
                  <a href="#"><i class="fab fa-instagram"></i></a>
                  <a href="#"><i class="fab fa-youtube"></i></a>
                  <a href="#"><i class="fab fa-twitter"></i></a>
                  <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
              </div>
              <div class="col" id="services" style={{ marginRight: "120px",textAlign:"justify" }}>
                <p >A music player is a tool for playing audio files. It offers features like organizing playlists, adjusting volume, and displaying album art, enhancing the experience of enjoying your favorite tunes.
                </p>
              </div>
             <div class="col " id="useful-links">
                <h3>Links</h3>
                <div class="links">
                  <a href="sign" target="_blank" style={{ textDecoration: "none" }}>Sign</a>
                  {/* <a href="profile" style={{ textDecoration: "none" }}>Profile</a> */}
                 </div>
              </div>
               <div class="col " id="useful-links">
                <h3>Links</h3>
                <div class="links">
                  <a href="https://react.dev/" target="_blank" style={{ textDecoration: "none" }}>React</a>
                  <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: "none" }}>React Bootstrap</a>
                  <a href="https://bootswatch.com/" style={{ textDecoration: "none" }}>Bootswatch</a>
                </div>
              </div>
              </div>
                </div>
            </div>
          </div>
          <div className="text-center py-3 ms-5">
            <p> &copy; 2024 Even Rocking . Built with React.</p>
          </div>
        </footer>
      </body>

    </>
  )
}

export default Footer1