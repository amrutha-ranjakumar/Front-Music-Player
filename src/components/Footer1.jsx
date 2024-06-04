import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import { Contact } from './Contact';

function Footer1() {
  return (
    <footer className='mt-5'>
      <div className="contact-section mb-5 mt-5" id="contact">
        <Container>
          <h3 className="text-center text-black">Contact</h3>
          <Contact />
          <Row className="mt-5">
            <Col md={4} className="text-center ">
              <h5 className="company-title text-black">
                <i className="fa-solid fa-crown"></i> Ever Rocking <i className="fa-solid fa-crown"></i>
              </h5>
              <img src='https://i.pinimg.com/564x/da/f4/1f/daf41fac6e68bef819ce7f3f857d8974.jpg' alt="Logo" className="logo mt-4" style={{ width: '50%', maxWidth: '400px', maxHeight: '200px',borderRadius:"50%",marginLeft:"100px" }} />
              <div className="social mt-3">
                <a href="#"><i className="fab fa-facebook"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
              </div>
            </Col>
            <Col md={4} className="text-center text-md-left mt-4 mt-md-0">
              <p className="services-text" style={{ marginTop: '130px' }}>
                A music player is a tool for playing audio files. It offers features like organizing playlists, adjusting volume, and displaying album art, enhancing the experience of enjoying your favorite tunes.
              </p>
            </Col>
            <Col md={2} className="text-center text-md-left mt-4 mt-md-0  ">
              <h3 style={{ marginTop: '60px' }} className='text-black'>Links</h3>
              <div className="links ">
                <Link to="/sign" target="_blank">Sign</Link>
                <Link to="https://react.dev/" target="_blank">React</Link>
                <Link to="https://react-bootstrap.netlify.app/" target="_blank">React Bootstrap</Link>
                <Link to="https://bootswatch.com/" target="_blank">Bootswatch</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="text-center py-3">
        <p>&copy; 2024 Ever Rocking. Built with React.</p>
      </div>
    </footer>
  );
}

export default Footer1;
