import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Swal from 'sweetalert2';

function Sign1({ register }) {
  const registerForm = register ? true : false;
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      Swal.fire({
        title: "REGISTRATION?",
        text: "Please fill the form completely?",
        icon: "question"
      });
    } else {
      const result = await registerAPI(userData);
      if (result.status === 200) {
        Swal.fire({
          title: "REGISTRATION?",
          text: "User registered successfully",
          icon: "success"
        });
        setUserData({
          username: '',
          email: '',
          password: ''
        });
        navigate('/sign');
      } else {
        toast.error(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      Swal.fire({
        title: "LOGIN",
        text: "Please fill the form completely?",
        icon: "question"
      });
    } else {
      const result = await loginAPI(userData);
      if (result.status === 200) {
        sessionStorage.setItem('existinguser', JSON.stringify(result.data.existinguser));
        sessionStorage.setItem('token', result.data.token);
        Swal.fire({
          title: "LOGIN?",
          text: "User logged in successfully",
          icon: "success"
        });
        setUserData({
          username: '',
          email: '',
          password: ''
        });
        navigate('/profile');
      } else {
        toast.error(result.response.data);
      }
    }
  };

  return (
    <>
      <div style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', color: 'white' }}>
        <div className='d-flex justify-content-center align-items-center' style={{ minHeight: '90vh' }}>
          <div className='container'>
            <div className='card card-5 border p-5 mt-3'>
              <div className='row align-items-center'>
                <div className='col-lg-6 col-md-6 p-5'>
                  <img src='https://i.pinimg.com/564x/a1/a9/3e/a1a93ed20a5f0ab9fbb36d8269572c40.jpg' alt='' className='img-fluid' style={{ borderRadius: '10%' }} />
                </div>
                <div className='col-lg-6 col-md-6 p-3'>
                  <div className='d-flex align-items-center flex-column'>
                    <h2 style={{ color: 'blue' }}>
                      <i className='fa-solid fa-music' style={{ color: 'blue' }}></i> Ever Rocking
                    </h2>
                    <h5 style={{ color: 'blue' }}>{registerForm ? 'Sign Up Your Account' : 'Sign Into Your Account'}</h5>
                    <br />
                    <Form className='w-100'>
                      {registerForm && (
                        <Form.Group controlId='formUsername' className='mb-3'>
                          <Form.Label className='text-primary'>User Name</Form.Label>
                          <Form.Control
                            value={userData.username}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                            size='lg'
                            type='text'
                            placeholder='User Name'
                          />
                        </Form.Group>
                      )}
                      <Form.Group controlId='formEmail' className='mb-3'>
                        <Form.Label className='text-primary'>Email</Form.Label>
                        <Form.Control
                          value={userData.email}
                          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                          size='lg'
                          type='email'
                          placeholder='Email'
                        />
                      </Form.Group>
                      <Form.Group controlId='formPassword' className='mb-3'>
                        <Form.Label className='text-primary'>Password</Form.Label>
                        <Form.Control
                          value={userData.password}
                          onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                          size='lg'
                          type='password'
                          placeholder='Password'
                        />
                      </Form.Group>
                    </Form>
                    {registerForm ? (
                      <div>
                        <button className='btn btn-primary rounded mt-4 w-100' onClick={handleRegister}>
                          Register
                        </button>
                        <p className='mt-3'>
                          Already a user? Click here to{' '}
                          <Link to='/sign' style={{ textDecoration: 'none', color: 'blue' }}>
                            Login
                          </Link>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <button className='btn btn-primary rounded mt-4 w-100' onClick={handleLogin}>
                          Login
                        </button>
                        <p className='mt-3'>
                          Not a user yet? Click here to{' '}
                          <Link to='/register' style={{ textDecoration: 'none', color: 'blue' }}>
                            Register
                          </Link>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-center' autoClose={2000} theme='dark' />
    </>
  );
}

export default Sign1;
