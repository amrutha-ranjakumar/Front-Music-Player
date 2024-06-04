import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { profileAPI } from '../services/allAPI';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

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
        title: "Please fill the form completely",
        showClass: {
          popup: 'animate__animated animate__fadeInUp animate__faster'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutDown animate__faster'
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
          title: "Profile",
          text: "Profile created successfully",
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
    <div className='container mb-5 mt-5 border border-6 border-warning rounded p-4' >
      <h2 className='text-center'>
        <i className='fa-solid fa-music' style={{ color: 'red' }}></i> Create Your Profile
      </h2>
      <Row className="justify-content-center mt-4">
        <Col xs={12} md={6} lg={4} className="text-center">
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
              src={preView || "https://static.vecteezy.com/system/resources/previews/020/213/738/original/add-profile-picture-icon-upload-photo-of-social-media-user-vector.jpg"}
              alt=""
            />
          </label>
        </Col>
      </Row>
      <div className='d-flex align-items-center flex-column'>
        <Form.Group controlId="validationCustom01" className='mb-3' style={{ width: "100%", maxWidth: "650px" }}>
          <Form.Label>User Name</Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='User Name'
            borderradius='50px'
            value={profile.username}
            onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="validationCustom02" className='mb-3' style={{ width: "100%", maxWidth: "650px" }}>
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
        <Form.Group controlId="validationCustom03" className='mb-3' style={{ width: "100%", maxWidth: "650px" }}>
          <Form.Label>Phone No</Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Phone No'
            value={profile.phoneno}
            onChange={(e) => setProfile({ ...profile, phoneno: e.target.value })}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </div>
      <Container className="text-center">
        <Row>
          <Col xs={12} md={6} className="mb-3">
            <button className='btn btn-danger rounded' style={{ width: "100%", maxWidth: "300px" }} onClick={createProfile}>
              Create Profile
            </button>
          </Col>
          <Col xs={12} md={6}>
            <Link to='/home'>
              <button className='btn btn-danger rounded' style={{ width: "100%", maxWidth: "300px" }}>
                Skip
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Profile;
