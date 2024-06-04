import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer1 from '../components/Footer1';
import image1 from '../assets/front.jpg';
import './landing.css';  // Assuming you have a CSS file for additional styles

function Landing() {
  return (
    <>
      <div className='landing-background'>
        <div className='d-flex justify-content-center align-items-center flex-column'>
          <Link 
            to='./sign' 
            style={{ 
              textDecoration: 'none', 
              color: 'white',
              display: 'block', 
              maxWidth: '100%', 
              margin: '0 auto'
            }}
          >
            <button 
              className='video-button' 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                border: 'none', 
                background: 'transparent', 
                padding: '0',
                width: '100%'
              }}
            >
              <img 
                src={image1} 
                alt='Button Image' 
                className='img-fluid' 
                style={{ 
                  maxWidth: '100%', 
                  height: '700px' 
                }} 
              />
              <h1 className='landing-title'>
                <i className="fa-solid fa-crown" style={{ color: "red", fontSize: "30px" }}></i>
                EVER ROCKING
                <i className="fa-solid fa-crown" style={{ color: "red", fontSize: "30px" }}></i>
              </h1>
              <Link to='/register' className='get-started-button'>
                Get Started <i className='fa-solid fa-arrow-right ms-2'></i>
              </Link>
            </button>
          </Link>
        </div>
      </div>
      <Container className='d-flex align-items-center justify-content-evenly w-100 mt-5 p-4'>
        <Row>
          <Col md={6}>
            <h3 className='landing-heading mt-5'>
              Welcome to <span className='text-black'>Ever Rocking</span>
            </h3>
            <br />
            <p className='landing-text text-black'>
              Welcome to "Ever Rocking" – your ultimate destination for music lovers! Dive into a world where melodies meet innovation, and passion intertwines with technology. Ever Rocking isn't just a music player; it's an experience, meticulously crafted to elevate your auditory journey to new heights.
              With Ever Rocking, immerse yourself in a seamless music playback experience that adapts to your mood and preferences. Whether you're craving the classics or exploring the latest hits, our extensive library has something for everyone. From timeless tunes to cutting-edge tracks, discover and rediscover your favorite songs with ease.
              But Ever Rocking is more than just a platform for listening; it's a community. Connect with fellow music enthusiasts, share playlists, and explore curated collections handpicked by our team of experts. Dive into discussions, discover hidden gems, and expand your musical horizons like never before.
              With sleek design and intuitive functionality, Ever Rocking is your go-to destination for all things music. Whether you're jamming out solo or hosting a virtual listening party with friends, let Ever Rocking be your soundtrack to life's moments – big and small.
              Join the revolution in music listening – join Ever Rocking today. Let the rhythm guide you, and the melodies inspire you. The stage is set, the audience awaits – are you ready to rock?
            </p>
          </Col>
          <Col md={6} className='d-flex flex-column align-items-center'>
            <img src='https://i.pinimg.com/564x/29/40/c9/2940c9a05ffecbe41b709ac24550209c.jpg' alt='' className='img-fluid mb-3' style={{ borderRadius: "20%", maxWidth: '100%' }} />
          </Col>
        </Row>
      </Container>
      <Footer1 />
    </>
  );
}

export default Landing;
