import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Home.css';
import { AllMusicAPI, userprofileAPI } from '../services/allAPI';
import MusicCard from './MusicCard';
import Header from '../components/Header';
import Footer1 from '../components/Footer1';
import { BASE_URL } from '../services/baseurl';

function Home() {
    const [userprofile, setuserprofile] = useState([]);
    const [searchKey, setSearchKey] = useState('');
    const [allMusic, setallMusic] = useState([]);

    useEffect(() => {
        getuserprofile();
        getAllMusic();
    }, []);

    const getuserprofile = async () => {
        if (sessionStorage.getItem('token')) {
            const token = sessionStorage.getItem('token');
            const reqHeader = {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            };
            const result = await userprofileAPI(reqHeader);
            setuserprofile(result.data);
        }
    };

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
        <div className="home-container">
            <Header />
            <div className="spacer"></div>
            <Container style={{marginTop:"100px"}}>
                {userprofile?.length > 0 ? (
                    userprofile.map((item) => (
                        <Row key={item.userId} className="profile-row">
                            <Col xs={12} md={3} className="text-center">
                                <img src={`${BASE_URL}/uploads/${item.profileimage}`} className='profile-image' alt="" style={{height:"300px",width:"300px"}} />
                            </Col>
                            <Col xs={12} md={7} className="profile-details">
                               
                                <h5 style={{fontSize:"80px"}} >{item.username}</h5>
                                <h4>{item.email}</h4>
                            </Col>
                        </Row>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </Container>
            <div className="dropdown-container">
                <div className="dropdown">
                    <button  className="dropdown-btn">All Music</button>
                </div>
                <div className="dropdown">
                    <Link to='/trendingnow'>
                        <button className="dropdown-btn">Trending Now</button>
                    </Link>
                </div>
                <div className="dropdown">
                    <Link to='/oldsongs'>
                        <button className="dropdown-btn">Old songs</button>
                    </Link>
                </div>
                <div className="dropdown">
                    <Link to='/newsongs'>
                        <button className="dropdown-btn">New songs</button>
                    </Link>
                </div>
            </div>
            <div className="music-wrapper">
                {allMusic?.length > 0 ? (
                    allMusic.map((item) => (
                        <MusicCard key={item.id} music={item} />
                    ))
                ) : (

                    <div>
                    <img style={{ width: "400px", borderRadius: "30%", marginLeft: "-10px" }} src="https://i.pinimg.com/564x/ea/37/ea/ea37ea689a2f2a928dd88026cebe8615.jpg" alt="" />
                    <p className="text-center">No music uploaded yet</p>
                  </div>
                    
                )}
            </div>
            <Footer1 />
        </div>
    );
}

export default Home;
