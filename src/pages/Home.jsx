import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import { AllMusicAPI, userprofileAPI } from '../services/allAPI';
import { useEffect, useState } from 'react';
import MusicCard from './MusicCard';
import Header from '../components/Header';
import Footer1 from '../components/Footer1'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BASE_URL } from '../services/baseurl';

function Home() {
  const [userprofile, setuserprofile] = useState([]);
  const [searchKey, setSearchKey] = useState('');
  const [allMusic, setallMusic] = useState([]);

  useEffect(() => {
    getuserprofile();
    getAllMusic();
  }, []);

  const getuserprofile = async (id) => {
    if (sessionStorage.getItem('token')) {
   const token = sessionStorage.getItem('token');
   const reqHeader = {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`
    };
    const result = await userprofileAPI(reqHeader);
    console.log("kjjjjjjjjjjjjjj");
    console.log(result);
    setuserprofile(result.data);
  };
}

  const getAllMusic = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      };
      const result = await AllMusicAPI(searchKey, reqHeader);
      setallMusic(result.data);
    }
  };

  return (
    <div  className="home-container">
      <Header />

      <div className='mb-5 mt-5 p-5'></div>
      
      <Container  style={{ marginLeft: '-60px' }}>
      {userprofile?.length > 0 ? (
          userprofile.map((item) => (
            <Row key={item.userId}>
              <Col >
                <div>
                  <img src={`${BASE_URL}/uploads/${item.profileimage}`} className='shape ms-5' alt="" />
                </div>
              </Col>
              <Col style={{ marginLeft: '-100px' }}>
              <h4 className='  mb-4 ms-5 '><span style={{ color: 'white', textAlign: 'justify',marginTop:"-50px",fontSize:"40px" }}></span></h4>
              <h4 className='  mb-4 ms-5 '><span style={{ color: 'white', textAlign: 'justify',marginTop:"-50px" }}> {item.username}</span></h4>
                <h4 className='  mb-4 ms-5 '><span style={{ color: 'white', textAlign: 'justify',marginTop:"-50px" }}> {item.email}</span></h4>
              </Col>
            </Row>
          ))
        ) : (
          <p colSpan="6">No data available</p>
        )}
      </Container>

      <div className='d-flex justify-content-center alig-items-center' style={{ marginTop: '80px', marginLeft: '-400px' }}>
        <div className='dropdown'>
          <button className='dropdown-btn'>All Music</button>
        </div>
        <div className='dropdown'>
          <Link to='/trendingnow'>
            <button className='dropdown-btn'>Trending Now</button>
          </Link>
        </div>
        <div className='dropdown'>
          <Link to='/oldsongs'>
            <button className='dropdown-btn'>Old songs</button>
          </Link>
        </div>
        <div className='dropdown'>
          <Link to='/newsongs'>
            <button className='dropdown-btn'>New songs</button>
          </Link>
        </div>
      </div>

      <div    className='wrapper'>
        {allMusic?.length > 0 ? (
          allMusic.map((item) => (
            <MusicCard key={item.id} music={item} />
          ))
        ) : (
          <p style={{ marginRight: '230px' }} className='text-white mt-5 '>
            No music uploaded yet
          </p>
        )}
      </div>

      <Footer1 />
    </div>
  );
}

export default Home;
