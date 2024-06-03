import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Swal from 'sweetalert2'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qh7mnxu', 'template_n5zictb', form.current, {
        publicKey: 'XkNpRc5qOFp1B7Lc-',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({
            title: "MESSAGE",
            text: "message send successfully?",
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
    <form ref={form} onSubmit={sendEmail}>





      <Row>
        <Col style={{ marginLeft: "400px" }}>


          <div style={{ width: "700px" }} >
            <label htmlFor='name' style={{ color: 'red' }}>Name:</label>
            <br />

            <input type='text' className='form-control mb-2' style={{ backgroundColor: 'black', height: "80px" }} name='from_name' />
            <label htmlFor='email' style={{ color: 'red' }}>Email</label>
            <br />
            <input type='email' className='form-control mb-2' style={{ backgroundColor: 'black', height: "80px" }} name='from_email' />
            <label htmlFor='message' style={{ color: 'red' }} >Message</label>
            <br />
            <textarea name='message' className='form-control mb-3' style={{ height: '200px', backgroundColor: 'black' }} type='submit' />
            <input type='submit' className='form-control btn btn-danger' style={{ borderRadius: '500px', marginTop: "10px" }} value='Send' />
          </div>

        </Col>


      </Row>
      <div style={{ marginLeft: "280px", marginTop: "50px" }} >
        <p >
          A responsive music player app offering play, pause, skip, album artwork
          display, and high-quality audio streaming with intuitive controls.</p>
      </div>
      <div style={{ marginLeft: "650px", marginTop: "50px" }} >
        <Link><i className="fa-brands fa-instagram fa-fade fa-2x p-3" style={{ color: "lightblue" }}></i></Link>
        <Link><i className="fa-brands fa-facebook fa-fade fa-2x p-3" style={{ color: "lightblue" }}></i></Link>

        <Link><i className="fa-brands fa-linkedin-in fa-fade fa-2x p-4" style={{ color: "lightblue" }}></i></Link>
        <Link><i class="fa-brands fa-twitter fa-fade fa-2x p-1" style={{ color: "lightblue" }}></i></Link>
      </div>

      <hr style={{ width: "1700px", marginLeft: "-50px", marginTop: "50px" }} />
      <hr style={{ width: "1700px", marginLeft: "-50px" }} />



    </form>
  );
};