import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import music1 from '../assets/music1.jpg';
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../services/allAPI';
import Header from '../components/Header';

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
      alert('Please fill the form completely');
    } else {
      const result = await registerAPI(userData);
      if (result.status === 200) {
        alert('User registered successfully');
        setUserData({
          username: '',
          email: '',
          password: ''
        });
        navigate('/sign');
      } else {
        alert(result.response.data);
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      alert('Please fill the form completely');
    } else {
      const result = await loginAPI(userData);
      if (result.status === 200) {
        sessionStorage.setItem('existinguser', JSON.stringify(result.data.existinguser));
        sessionStorage.setItem('token', result.data.token);
        alert('User logged in successfully');
        setUserData({
          username: '',
          email: '',
          password: ''
        });
        navigate('/home');
      } else {
        alert(result.response.data);
      }
    }
  };

  return (
    <>
      <Header />
      <div className='mb-5 mt-5 p-5'></div>

      <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
        <div className='w-75 container'>
          <div className='card bg-black p-5 mt-3'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 p-5'>
                <img src={music1} alt='' width={'100%'} style={{ borderRadius: '10px' }} />
              </div>
              <div className='col-lg-6 col-md-6 p-3'>
                <div className='d-flex align-items-center flex-column'>
                  <h2>
                    <i className='fa-solid fa-music' style={{ color: 'blue' }}></i> Ever Rocking
                  </h2>
                  <h5>{registerForm ? 'Sign Up Your Account' : 'Sign Into Your Account'}</h5>
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
                        <Link to='/sign' style={{ textDecoration: 'none', color: 'white' }}>
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
                        <Link to='/register' style={{ textDecoration: 'none', color: 'white' }}>
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
    </>
  );
}

export default Sign1;
