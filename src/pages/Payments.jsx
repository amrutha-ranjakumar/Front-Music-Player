import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../services/baseurl';
import Header from '../components/Header';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Footer1 from '../components/Footer1';
import Swal from 'sweetalert2';

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
  };

  return (
    <>
      <Header  />
      <div className="container">
        <div className="row mt-5">
          <div className="col text-start" style={{ marginBottom:"200px" }}>
            <button className='btn btn-danger' style={{ marginBottom:"-400px" }}>
              <Link to={'/home'} style={{ textDecoration: "none", color: "white",marginBottom:"-400px" }}>
                <i className="fa-solid fa-arrow-left me-2"></i>
                Back to Home
              </Link>
            </button>
          </div>
        </div>
        <div className="row mt-5" >
          <div className="col text-center mt-5" >
            <h1>Listen without limits. Try 2 months of Premium for ₹119.</h1>
            <h5>Only ₹119/month after. Cancel anytime.</h5>
            <button className='btn btn-warning p-3 mt-5 round'>Get Premium Individual</button>
            <p className="mt-5 text-black">₹119 for 2 months, then ₹119 per month after. Offer only available if you haven't tried Premium before. Terms apply.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <h1>Available Plans</h1>
            <h5>Filter By Category</h5>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 mb-4">
            <div className='text-center'>
              <h3 className='border border-5 p-5'>Pro Students</h3>
              <h5 className='mt-3'>Add Free</h5>
              <h6>Music</h6>
              <h5 className='mt-3'>Unlimited</h5>
              <h6>Ever Rocking Tunes</h6>
              <form onSubmit={(e) => handleSubmit(e, 49)}>
                <div className="text-center mt-3">
                  <button type="submit" className='btn btn-danger'>&#8377;49/month</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className='text-center'>
              <h3 className='border border-5 p-5'>Ever Rocking Tunes+</h3>
              <h5 className='mt-3'>Set Unlimited Ever Rocking Tunes from 1Mn + Song Options</h5>
              <form onSubmit={(e) => handleSubmit(e, 49)}>
                <div className="text-center mt-3">
                  <button type="submit" className='btn btn-danger'>&#8377;49/month</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className='text-center'>
              <h3 className='border border-5 p-5'>Pro Individual</h3>
              <h5 className='mt-3'>Add Free</h5>
              <h6>Music</h6>
              <form onSubmit={(e) => handleSubmit(e, 89)}>
                <div className="text-center mt-3">
                  <button type="submit" className='btn btn-danger'>&#8377;89/month</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <h3>Custom Plans</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-4 offset-md-2 mb-4">
            <div className='text-center'>
              <h3 className='border border-5 p-5'>Pro Individual</h3>
              <h5 className='mt-3'>Add Free</h5>
              <h6>Music</h6>
              <form onSubmit={(e) => handleSubmit(e, 24)}>
                <div className="text-center mt-3">
                  <button type="submit" className='btn btn-danger'>&#8377;5/day</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className='text-center'>
              <h3 className='border border-5 p-5'>Pro Individual</h3>
              <h5 className='mt-3'>Add Free</h5>
              <h6>Music</h6>
              <form onSubmit={(e) => handleSubmit(e, 24)}>
                <div className="text-center mt-3">
                  <button type="submit" className='btn btn-danger'>&#8377;19/week</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
}

export default RecentlyPlayed;
