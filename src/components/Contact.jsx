import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'react-bootstrap';
import Swal from 'sweetalert2';

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qh7mnxu', 'template_n5zictb', form.current, 'XkNpRc5qOFp1B7Lc-')
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "MESSAGE",
            text: "Message sent successfully!",
            icon: "success"
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
          Swal.fire({
            icon: "error",
            title: "EMAILJS",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        },
      );
  };

  return (
    <Container>
      <form ref={form} onSubmit={sendEmail}>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <div className="p-3">
              <label htmlFor='name' style={{ color: 'black' }}>Name:</label>
              <br />
              <input type='text' className='form-control mb-2' style={{  height: "80px", color: 'white' }} name='from_name' required />
              <label htmlFor='email' style={{ color: 'black' }}>Email:</label>
              <br />
              <input type='email' className='form-control mb-2' style={{  height: "80px", color: 'white' }} name='from_email' required />
              <label htmlFor='message' style={{ color: 'black' }}>Message:</label>
              <br />
              <textarea name='message' className='form-control mb-3' style={{ height: '200px', color: 'white' }} required />
              <input type='submit' className='form-control btn btn-danger' style={{ borderRadius: '500px', marginTop: "10px" }} value='Send' />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12} md={8}>
            <p className="text-center">
              A responsive music player app offering play, pause, skip, album artwork display, and high-quality audio streaming with intuitive controls.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs="auto">
            <Link to="#"><i className="fa-brands fa-instagram fa-fade fa-2x p-3" style={{ color: "lightblue" }}></i></Link>
            <Link to="#"><i className="fa-brands fa-facebook fa-fade fa-2x p-3" style={{ color: "lightblue" }}></i></Link>
            <Link to="#"><i className="fa-brands fa-linkedin-in fa-fade fa-2x p-4" style={{ color: "lightblue" }}></i></Link>
            <Link to="#"><i className="fa-brands fa-twitter fa-fade fa-2x p-1" style={{ color: "lightblue" }}></i></Link>
          </Col>
        </Row>
        <Row className="justify-content-center mt-4">
          <Col xs={12}>
            <hr />
          </Col>
        </Row>
      </form>
    </Container>
  );
};
