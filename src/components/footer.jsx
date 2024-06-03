import React from 'react'
import './footer.css'
import img from '../assets/footerimg1.jpg'
import { Link } from 'react-router-dom';

function footer() {
  return (
    <>

      <body>
        <footer className='mt-5'>
          <div class="container">
            <div class="row">
              <div class="col" id="company">
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

                <p >

                  A music player is a tool for playing audio files. It offers features like organizing playlists, adjusting volume, and displaying album art, enhancing the experience of enjoying your favorite tunes.
                </p>
              </div>

              <div class="col " id="useful-links">
                <h3>Links</h3>
                <div class="links">
                  <a href="https://react.dev/" target="_blank" style={{ textDecoration: "none" }}>React</a>
                  <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: "none" }}>React Bootstrap</a>
                  <a href="https://bootswatch.com/" style={{ textDecoration: "none" }}>Bootswatch</a>
                </div>
              </div>

              <div class="col" id="contact ">
                <h3>Contact</h3>
                <div class="">

                  <div class="row">
                    <div class="form">
                      <form action="">
                        <input type="text" placeholder="Email here..." />
                        <button><i class="fa fa-paper-plane"></i></button>
                      </form>
                    </div>
                  </div>

                  <div className="social-links ">
                    <Link><i className="fa-brands fa-instagram fa-fade fa-2x p-3" style={{ color: "lightblue" }}></i></Link>
                    <Link><i className="fa-brands fa-facebook fa-fade fa-2x p-3" style={{ color: "lightblue" }}></i></Link>

                    <Link><i className="fa-brands fa-linkedin-in fa-fade fa-2x p-4" style={{ color: "lightblue" }}></i></Link>
                    <Link><i class="fa-brands fa-twitter fa-fade fa-2x p-1" style={{ color: "lightblue" }}></i></Link>
                  </div>


                </div>

              </div>
            </div>



          </div>
          <div className="text-center py-3">
            <p> &copy; 2024 Even Rocking . Built with React.</p>
          </div>
        </footer>
      </body>

    </>
  )
}

export default footer