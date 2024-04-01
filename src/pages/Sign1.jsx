import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import music1 from '../assets/music1.jpg'
import Form from 'react-bootstrap/Form';

import { Button } from 'react-bootstrap'
import img10 from '../assets/img1.png'
import img11 from '../assets/COLLECTION_1671425622182395.png'
import img12 from '../assets/gitar.png'
import img13 from '../assets/minnal.jpg'
import { loginAPI, registerAPI } from '../services/allAPI';
import Header from '../components/Header';

function Sign1({ register }) {
  // console.log("value inside Sign1.jsx");
  // console.log(register);
  const registerForm = register ? true : false;
  const navigate= useNavigate()


  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: ""
  })
  const handleRegister = async(e)=>{
    e.preventDefault();
    console.log(userData);
    const{username,email,password}=userData;
    if(!username || !email || !password){
      alert("please fill the form completely")
    }
    else{
      const result = await registerAPI(userData)
      console.log(result);
      if (result.status === 200) {
        alert("user Registered successfully")
        setUserData({
          username: "",
          email: "",
          password: ""

        })
        navigate('/sign')
      }
      else{
        alert(result.response.data)
      }
    }
  }
  const handlelogin =async (e)=>{
    e.preventDefault();
    // console.log(userData);
    const{email,password}=userData;
    if(!email || !password){
      alert("please fill the form completely")
    }
    else{
      const result = await loginAPI(userData);
      if(result.status ===200){
        console.log(result);
        sessionStorage.setItem("exstinguser",JSON.stringify(result.data.existinguser));
        sessionStorage.setItem("token",result.data.token)
        alert("user logged in successfully")
        setUserData({
          username: "",
          email: "",
          password: ""

        })
        navigate('/home')
      }
      else{
        alert(result.response.data)
      }
    
      

    }
  }
  console.log(registerForm);
  return (
    <>
    <Header/>
      <div className='mb-5 mt-5 p-5'></div>

      <div className='d-flex justify-content-center align-items-center' style={{ width: "100%", height: "90vh", marginLeft: "40px" }}>
        <div className='w-75 container'>

          <div className='card bg-black p-5 mt-3'>
            <div className='row align-items-center'>
              <div className='col-lg-6 col-md-6 p-5'>
                <img src={music1} alt="" width={"100%"} style={{ borderRadius: "10px" }} />

              </div>
              <div className='col-lg-6 col-md-6 p-3'>
                <div className='d-flex align-items-center flex-column'>
                  <h2>
                    <i class="fa-solid fa-music" style={{ color: "blue" }}></i> Ever Rocking
                  </h2>
                  <h5>
                    {
                      registerForm ? "Sign Up Your Accound" : "Sign Into Your Accound"
                    }
                  </h5>
                  <br />
                  <Form className='w-100'>
                    {
                      registerForm &&
                      <Form.Group md="4" controlId="validationCustom01">
                        <Form.Label className='text-primary '>User name</Form.Label>
                        <Form.Control
                        
                          value={userData.username}
                          onChange={(e)=>setUserData({...userData,username:e.target.value})}
                          size="lg"
                          type="text"
                          placeholder="user name"
                        />
                      </Form.Group>
                    }
                    <br />

                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label className='text-primary '>Email</Form.Label>
                      <Form.Control
                     
                        value={userData.email}
                        onChange={(e)=>setUserData({...userData,email:e.target.value})}
                        size="lg"
                        type="text"
                        placeholder="Email"
                      />
                    </Form.Group>
                    <br />
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label className='text-primary '>Password</Form.Label>
                      <Form.Control

                   
                        value={userData.password}
                        onChange={(e)=>setUserData({...userData,password:e.target.value})}
                        size="lg"

                        type="password"
                        placeholder="Password "
                      />
                    </Form.Group>
                  </Form>
                  {
                    registerForm ?
                      <div className='ms-1'>
                        <button className='btn btn-primary rounded mt-5 ms-2 p-2 w-100 ' onClick={handleRegister}>Register</button>
                        <p >Already a user ?click here to<Link to='/sign' style={{ textDecoration: "none", color: "white" }}> Login</Link></p>
                      </div> :
                      <div>
                        <Link to='/home' >
                          <button className='btn btn-primary rounded mt-5 ms-2 p-2 w-100' onClick={handlelogin} >Login</button>
                        </Link>

                        <p >Already a user ?click here to<Link to='/register' style={{ textDecoration: "none", color: "white" }} > Register</Link></p>
                      </div>
                  }





                </div>



              </div>

            </div>
          </div>

        </div>

        {/* <div class="wrapper p-5 ms-5 " style={{ marginTop:"-400px"}} >

        <div class="box">
      <img   className='mb-5 round'src={img10} alt=""/>
    <div className='d-flex align-items-center justify-content-between'>
     <Button variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
    <Button variant="outline-success"><i class="fa-solid fa-play ms-1"></i></Button>
    </div>
		</div>


<div class="box">
      <img   className='mb-5 round'src={img11} alt=""/>
    <div className='d-flex align-items-center justify-content-between'>
     <Button variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
    <Button variant="outline-success"><i class="fa-solid fa-play ms-1"></i></Button>
    </div>
		</div>
 
<div class="box">
      <img   className='mb-5 round'src={img12} alt=""/>
    <div className='d-flex align-items-center justify-content-between'>
     <Button variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
    <Button variant="outline-success"><i class="fa-solid fa-play ms-1"></i></Button>
    </div>
		</div>
  <div class="box">
      <img   className='mb-5 round'src={img13} alt=""/>
    <div className='d-flex align-items-center justify-content-between'>
     <Button variant="outline-danger"><i class="fa-solid fa-heart"></i></Button>
    <Button variant="outline-success"><i class="fa-solid fa-play ms-1"></i></Button>
    </div>
		</div>
  </div> */}
      </div>
    </>


  )
}

export default Sign1