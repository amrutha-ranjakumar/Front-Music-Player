import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { profileAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import img from '../assets/front6.jpg';
import Swal from 'sweetalert2'

function Profile() {
  const navigate = useNavigate();
  const [preView, setPreview] = useState("");
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    phoneno: "",
    profileimage: null
  });

  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, []);

  const handleFileChange = (e) => {
    setProfile({ ...profile, profileimage: e.target.files[0] });
    setPreview(URL.createObjectURL(e.target.files[0]));
  };

  const createProfile = async (e) => {
    e.preventDefault();
  
    const { username, email, phoneno, profileimage } = profile;
  
    if (!username || !email || !phoneno || !profileimage) {
      Swal.fire({
        title: "please fill the form completely",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      return;
    }
  
    const reqBody = new FormData();
    reqBody.append('username', username);
    reqBody.append('email', email);
    reqBody.append('phoneno', phoneno);
    reqBody.append('profileimage', profileimage);
  
    const reqHeader = {
      "Authorization": `Bearer ${token}`
    };
  
    try {
      const result = await profileAPI(reqBody, reqHeader);
      if (result.status === 200) {
        Swal.fire({
          title: "PROFILE?",
          text: "Profile created successfully?",
          icon: "success"
        });
       
       
        navigate('/home');
      } else {
        let errorMessage = "Failed to create profile";
        if (result.response && result.response.data && result.response.data.message) {
          errorMessage = result.response.data.message;
        }
        alert(errorMessage);
      }
    } catch (error) {
      console.error("Error creating profile:", error);
      alert("Error creating profile. Please try again later.");
    }
  };
  

  return (
    <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-4' style={{ background: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }}>
      <div>
        <h2>
          <i className='fa-solid fa-music' style={{ color: 'red', marginLeft: "20px", marginTop: "50px" }}></i> Create Your Profile
        </h2>
      </div>
      <div style={{ marginLeft: "40px", marginTop: "40px", width: "300px" }}>
        <label htmlFor="projectImageupload">
          <input
            onChange={handleFileChange}
            type="file"
            style={{ display: "none" }}
            id='projectImageupload'
          />
          <img
            height={"300px"}
            width={"100%"}
            src={preView || "https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_640.png"}
            marginTop={"40px"}
            alt=""
          />
        </label>
      </div>
      <div style={{ marginLeft: "10px", marginTop: "20px" }}>
        <div className='d-flex align-items-center flex-column  mb-5'>
          <Form.Group controlId="validationCustom01" className='mb-3' style={{ width: "650px" }}>
            <Form.Label>User Name</Form.Label>
            <Form.Control
              size='lg'
              type='text'
              placeholder='User Name'
              value={profile.username}
              onChange={(e) => setProfile({ ...profile, username: e.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom01" className='mb-3' style={{ width: "650px" }}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              size='lg'
              type='email'
              placeholder='Email'
              value={profile.email}
              onChange={(e) => setProfile({ ...profile, email: e.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="validationCustom01" className='mb-3' style={{ width: "650px" }}>
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              size='lg'
              type='email'
              placeholder='Phone No'
              value={profile.phoneno}
              onChange={(e) => setProfile({ ...profile, phoneno: e.target.value })}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <div>
            <Container>
              <Row>
                <Col>
                  <button className='btn btn-danger rounded mt-4' style={{ width: "300px" }} onClick={createProfile}>
                    Create Profile
                  </button>
                </Col>
                <Col>
                  <Link to='/home'>
                    <button className='btn btn-danger rounded mt-4' style={{ width: "300px" }}>
                      Skip
                    </button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
