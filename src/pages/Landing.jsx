import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer1 from '../components/Footer1';
import image1 from '../assets/hero-bg.png';


function Landing() {
  return (
    <>
      <div className='landing-background' style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' }}>
        <div className='d-flex justify-content-center align-items-center'>
          <Link to='./sign' style={{ textDecoration: 'none', color: 'white' }}>
            <button className='video-button' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'none', background: 'transparent' }}>
            <img src='https://themewagon.github.io/musico/img/banner/banner.png' alt='Button Image' className='img-fluid' style={{ marginBottom: '10px', width: '2030px', height: '1100px' }} />
            </button>
          </Link>
        </div>
        <div>
          <h2 style={{ marginTop: '-400px', fontSize: '1.5rem', marginLeft: '800px' }}></h2>
          <Link to='/register' style={{ marginLeft: '810px' }}>
            <button style={{ marginLeft: "-600px", fontSize: "50px", borderRadius: "40px" }} className='btn btn-danger mt-5 p-3'>Get Started<i className='fa-solid fa-arrow-right ms-2'></i></button>
          </Link>
          <h1 style={{ marginTop: '-780px', marginLeft: '100px' }}>
            <i class="fa-solid fa-crown" style={{ color: "red", fontSize: "30px" }}></i>
            EVER    ROCKING
            <i class="fa-solid fa-crown" style={{ color: "red", fontSize: "30px" }}></i>
          </h1>
        </div>
      </div>
      {/* <hr style={{ marginTop: "300px" }} /> */}
      <Container className='d-flex align-items-center justify-content-evenly w-100' style={{ marginTop: '200px' }}>
        <Row>
          <Col>
            <h3 style={{ fontSize: '54px' }}>
              Welcome to <span className='text-warning'>Ever Rocking</span>
            </h3>
            <br />
            <p style={{ textAlign: 'justify', fontSize: '15px' }}>
              Welcome to "Ever Rocking" – your ultimate destination for music lovers! Dive into a world where melodies meet innovation, and passion intertwines with technology. Ever Rocking isn't just a music player; it's an experience, meticulously crafted to elevate your auditory journey to new heights.
              With Ever Rocking, immerse yourself in a seamless music playback experience that adapts to your mood and preferences. Whether you're craving the classics or exploring the latest hits, our extensive library has something for everyone. From timeless tunes to cutting-edge tracks, discover and rediscover your favorite songs with ease.
              But Ever Rocking is more than just a platform for listening; it's a community. Connect with fellow music enthusiasts, share playlists, and explore curated collections handpicked by our team of experts. Dive into discussions, discover hidden gems, and expand your musical horizons like never before.
              With sleek design and intuitive functionality, Ever Rocking is your go-to destination for all things music. Whether you're jamming out solo or hosting a virtual listening party with friends, let Ever Rocking be your soundtrack to life's moments – big and small.
              Join the revolution in music listening – join Ever Rocking today. Let the rhythm guide you, and the melodies inspire you. The stage is set, the audience awaits – are you ready to rock?
            </p>
          </Col>
          <Col>
            <img src='https://images.unsplash.com/photo-1614963563975-dca95dacd6a8?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWluZyUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D' alt='' height={'300px'} width={'500px'} className='ms-5' />
            <img src='https://www.sweetwater.com/insync/media/2013/05/live-sound-microphone.jpg' alt='' height={'200px'} width={'300px'} className='ms-5 mt-5' />
            <img src='https://guitar.com/wp-content/uploads/2021/08/Conor-Albert-Credit-Josh-Halling@1400x1050.jpg' alt='' height={'100px'} width={'100px'} className='ms-5 mt-5' />
          </Col>
        </Row>
      </Container>
      <Container className='d-flex align-items-center justify-content-evenly w-100' style={{ marginTop: '100px', marginLeft: "600px" }}>
        <Row>
          <Col style={{ marginLeft: "-400px" }}>
            <img src={image1} alt='' height={'900px'} width={'800px'} className='ms-5 mt-5' />
          </Col>
          <Col style={{ marginLeft: "100px" }} >
            <h3 style={{ fontSize: '54px', marginTop: "-80px" }}>
              <i class="fa-solid fa-crown" style={{ color: "red", fontSize: "30px" }}></i><span className='text-warning'>Ever Rocking<i class="fa-solid fa-crown" style={{ color: "red", fontSize: "30px" }}></i></span>
            </h3>
            <br />
            <p style={{ textAlign: 'justify', fontSize: '15px' }}>
              Experience music like never before with our state-of-the-art music player. With a sleek, user-friendly interface, it offers seamless navigation and customizable playlists. Enjoy crystal-clear sound quality, thanks to advanced audio enhancement features. The player supports all major audio formats, ensuring compatibility with your entire music library. Sync your music across devices effortlessly with cloud integration. The built-in equalizer allows for personalized sound settings, while the offline mode ensures your tunes are available anytime, anywhere. Smart recommendations and curated playlists keep your listening experience fresh and exciting. Compact yet powerful, our music player is designed for both casual listeners and audiophiles alike. Rediscover your music with unmatched convenience and quality.
            </p>
            <Col>
              <img src='https://blog.mugafi.com/wp-content/uploads/2022/07/vocal-microphones.jpg' alt='' height={'300px'} width={'500px'} className='ms-5' />
              <img src='https://i.pinimg.com/564x/e8/9b/13/e89b137f41ef45fa7411cc98a251e908.jpg' alt='' height={'200px'} width={'300px'} className='ms-5 mt-5' />
              <img src='https://mastering.com/wp-content/uploads/2020/09/acoustic-guitar-2.jpg' alt='' height={'100px'} width={'100px'} className='ms-5 mt-5' />
            </Col>
          </Col>
        </Row>
      </Container>
      <div style={{ marginTop: '100px' }}>
        <Footer1 />
      </div>
    </>
  );
}

export default Landing;
