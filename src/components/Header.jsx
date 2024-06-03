import React from 'react';
import '../components/Header.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Header() {
  

    return (
        <header clas='body1'>
            <input type="checkbox" name="" id="chk1" />
            <Link to='/' style={{ textDecoration: "none", color: "white" }}>
                <div class="logo"><h4><i class="fa-solid fa-music" style={{ color: "blue", }}></i> EVER ROCKING</h4></div>
            </Link><ul>
               
                <Link to='/recentlyplayed' style={{ textDecoration: "none", color: "white", marginTop: "23px" }}>
                    <a className='btn btn-danger rounded le' style={{ fontSize: "20px" }} > Recently</a>
                </Link>
                <Link to='/likedsongs' style={{ textDecoration: "none", color: "white", marginTop: "23px"}}>
                <a className='btn btn-danger rounded le ' style={{ fontSize: "20px"}} >Liked</a>
                </Link>
                {/* <Link to='/download' style={{ textDecoration: "none", color: "white", marginTop: "23px" }}>
                <a className='btn btn-danger rounded le' style={{ fontSize: "20px"}} >download</a>
                </Link> */}
            </ul>
              <div class="menu">
                <label for="chk1">
                    <i class="fa fa-bars"></i>
                </label>
            </div>
        </header>
    );
}

export default Header;
