import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/baseurl';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer from '../components/footer';
import Swal from 'sweetalert2'

function RecentlyPlayed() {
  const navigate = useNavigate();

  const handleSubmit = (e, itemRupee) => {
    e.preventDefault();

    var options = {
      key: "rzp_test_TBkT3E8adqdzZV",
      key_secret: "rsEMWBZGnJPP0mlvjMpFJU8J",
      amount: itemRupee * 100,
      currency: "INR",
      name: "Ever Rocking",
      description: "testing Purpose",
      handler: function (response) {


        Swal.fire({
          title: "PAYMENT",
          text: response.razorpay_payment_id,
          icon: "success"
        });
        
        navigate('/home');
      },
     
      theme: {
        color: "#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }

  return (
    <>
      <Header />
      <button style={{ marginTop: "250px" }} className='btn btn-danger ms-5'>
        <Link to={'/home'} style={{ textDecoration: "none", color: "white" }}>
          <i className="fa-solid fa-arrow-left me-2"></i>
        </Link>
      </button>
      <Row style={{ width: "1500px", marginLeft: "250px", marginTop: "-70px" }}>
        <Col>
<h1>Listen without limits. Try 2 months of Premium for ₹119.</h1>
<h5>Only ₹119/month after. Cancel anytime.</h5>
<button className='btn btn-warning p-3 mt-5 round'>Get ptremium individual</button>
<br />
<br />
<br />
<h9>₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. Terms apply.</h9>

        <hr style={{ width: "1500px", marginTop: "300px" }} />
        <h1 className='mt-3'>Available Plans</h1>
        <h5 className='mt-3'>Filter By Category</h5>
        </Col>
        <Col style={{marginLeft:"200px"}}>
        <img src="https://i.pinimg.com/564x/c2/6d/2b/c26d2b55ea44092cf439e061da70f9ba.jpg" height={'600px'} alt="" />
        <div style={{ width: "1500px", marginTop: "300px" }} />
       
        </Col>
      </Row>
      
      <Row sm={7} lg={6} md={4}>
        <Col>
          <div className='mt-5' style={{ width: "500px", marginLeft: "250px" }}>
            <h3 style={{ width: "500px", height: "400px" }} className='border border-5  mt-3 p-5'>pro students
              <h5 className='mt-5'>add free</h5>
              <h6>music</h6>
              <h5 className='mt-5'>unlimited</h5>
              <h6>ever rocking tunes</h6>
            </h3>
          </div>
        </Col>
        <Col>
          <div style={{ width: "400px", marginLeft: "1240px", marginTop: "240px" }}>
            <h5 className='mt-3'>Unlimited</h5>
            <h6>downloads</h6>
            <h5 className='mt-5'>2X Better</h5>
            <h6>sound Quality</h6>
       
          </div>
          <form onSubmit={(e) => handleSubmit(e, 49)}> {/* Add form and onSubmit handler */}
              <button style={{marginLeft:"-100px",width:"500px",marginTop:"100px"}} type="submit" className='btn btn-danger '>&#8377;49/month</button>
            </form>
        </Col>


        
        <Col>
          <div className='mt-5' style={{ width: "500px", marginLeft: "90px" }}>
            <h3 style={{ width: "500px", height: "400px" }} className='border border-5  mt-3 p-5'>Ever Rocking Tunes+
              <h5 className='mt-5'>set unlimited ever Rocking tunes from 1Mn + song options</h5>
            
            </h3>
          </div>
        </Col>
        <Col>
          <div style={{ width: "400px", marginLeft: "150px", marginTop: "240px" }}>
          
         
       
          </div>
          <form onSubmit={(e) => handleSubmit(e, 49)}> {/* Add form and onSubmit handler */}
              <button style={{marginLeft:"-250px",width:"500px",marginTop:"260px"}} type="submit" className='btn btn-danger '>&#8377;49/month</button>
            </form>
        </Col>




        <Col>
          <div className='mt-5' style={{ width: "500px", marginLeft: "-70px" }}>
            <h3 style={{ width: "500px", height: "400px" }} className='border border-5  mt-3 p-5'>pro individual
              <h5 className='mt-5'>add free</h5>
              <h6>music</h6>
              <h5 className='mt-5'>unlimited</h5>
              <h6>ever rocking tunes</h6>
            </h3>
          </div>
        </Col>
        <Col>
          <div style={{ width: "400px", marginLeft: "-1200px", marginTop: "240px" }}>
            <h5 className='mt-3'>Unlimited </h5>
            <h6>Downloads</h6>
            <h5 className='mt-5'>2X Better</h5>
            <h6>Sound Quality</h6>
       
          </div>
          <form onSubmit={(e) => handleSubmit(e, 89)}> {/* Add form and onSubmit handler */}
              <button style={{marginLeft:"-410px",width:"500px",marginTop:"100px"}} type="submit" className='btn btn-danger '>&#8377;89/month</button>
            </form>
        </Col>



        <Col>
          <div className='mt-5' style={{ width: "500px", marginLeft: "250px" }}>
            <h3 style={{ width: "500px", height: "400px" }} className='border border-5  mt-3 p-5'>pro individual
              <h5 className='mt-5'>add free</h5>
              <h6>music</h6>
             
            </h3>
          </div>
        </Col>
        <Col>
          <div style={{ width: "400px", marginLeft: "-1200px", marginTop: "230px" }}>
            <h5 className='mt-3'>Unlimited</h5>
            <h6>downloads</h6>
          
       
          </div>
          <form onSubmit={(e) => handleSubmit(e, 24)}> {/* Add form and onSubmit handler */}
              <button style={{marginLeft:"-1470px",width:"200px",marginTop:"200px"}} type="submit"  className='btn btn-danger '>&#8377;5/day</button>
              <button style={{marginLeft:"100px",width:"200px",marginTop:"200px"}} type="submit"  className='btn btn-danger '>&#8377;19/week</button>
            
            
            </form>
        </Col>
        
      </Row>
      <div className='mt-5'>
        <Footer />
      </div>
    </>
  );
}

export default RecentlyPlayed;
