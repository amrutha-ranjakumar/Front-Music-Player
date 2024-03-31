import React, { useState } from 'react'
import '../components/Header.css'
import music from '../assets/music.jpg'
import { Link } from 'react-router-dom';
import Home from '../pages/Home';

function Header() {
   
   
    return (
        <>

            <header clas='body1' >
                <input type="checkbox" name="" id="chk1" />
                <Link to='/' style={{ textDecoration: "none", color: "white" }} >
                    <div class="logo"><h4><i class="fa-solid fa-music" style={{ color: "blue", }}></i> EVER ROCKING</h4></div>
                </Link>
            
                <ul>
                    <Link to='/'  style={{ textDecoration: "none", color: "white" }}>
                    <li><a  style={{ fontSize: "25px" ,marginLeft:"550px"}} href="#"><i class="fa-solid fa-user fa-2x"></i>  Login</a></li>
                    </Link>
                   
                    
                </ul>
        
                <div class="menu">
                    <label for="chk1">
                    <i class="fa fa-bars"></i>
                    </label>
                </div>
            </header>
        

        </>

    )
}

export default Header