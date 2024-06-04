import React from 'react';
import '../components/Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
    return (
        <header clas='body1'>
            
            <input type="checkbox" name="" id="chk1"  />
            <Link to='/' style={{ textDecoration: "none", color: "white" }}>
                 
                <h1  className='ms-5' style={{ color: "white",fontSize:"60px" }}> <i className="fa-solid fa-music" style={{ color: "white" }}></i> Ever Rocking</h1>
            </Link>
            <ul className='name'>
                <Link to='/recentlyplayed' style={{ textDecoration: "none", color: "white", marginTop: "23px" }}>
                    <a className='btn btn-danger rounded le' style={{ fontSize: "20px" }} ><i class="fa-solid fa-play" style={{color:"blue"}}></i> Recently</a>
                </Link>
                <Link to='/likedsongs' style={{ textDecoration: "none", color: "white", marginTop: "23px"}}>
                    <a className='btn btn-danger rounded le ' style={{ fontSize: "20px"}} ><i class="fa-solid fa-heart" style={{color:"blue"}} ></i> Liked</a>
                </Link>
                <Link to='/home/songdetails' style={{ textDecoration: "none", color: "white", marginTop: "23px"}}>
                    <a className='btn btn-danger rounded le ' style={{ fontSize: "20px"}} ><i className="fa-solid fa-music" style={{ color: "blue" }}></i> Details</a>
                </Link>
              
            </ul>
         
            <div className="menu">
                <label htmlFor="chk1">
                    <i className="fa fa-bars"></i>
                </label>
            </div>
        </header>
    );
}

export default Header;
