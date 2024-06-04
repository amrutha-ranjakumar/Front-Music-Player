import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

import { AllMusicAPI } from '../services/allAPI';
import MusicCard from './MusicCard';
import Header from '../components/Header';
import Footer1 from '../components/Footer1';

import image1 from '../assets/BANNER1.jpg';
import image2 from '../assets/BANNER2.jpg';
import image3 from '../assets/BANNER3.png';
import image4 from '../assets/BANNER4.png';
import image5 from '../assets/BANNER5.jpg';
import image6 from '../assets/BANNER6.png';
import image7 from '../assets/BANNER7.png';
import image8 from '../assets/BANNER8.jpg';
import image9 from '../assets/BANNER9.jpg';
import image10 from '../assets/BANNRER10.jpg';

function NewSongs() {
  const [searchKey, setSearchKey] = useState('');
  const RecentlyArray = useSelector((state) => state.RecentlyplayedReducer);

  const [allMusic, setAllMusic] = useState([]);
  
  const getAllMusic = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      };
      const result = await AllMusicAPI(searchKey, reqHeader);
      setAllMusic(result.data);
    }
  };

  useEffect(() => {
    getAllMusic();
  }, [searchKey]);

  return (
    <>
      <Header />
      <div className="mb-5 p-5"></div>

      <div className="mt-5">
        <Carousel>
          {[image1, image2, image3, image4, image5, image6, image7, image8, image9, image10].map((image, index) => (
            <Carousel.Item key={index}>
              <img style={{ height: '40vh' }} className="d-block w-100" src={image} alt={`Slide ${index + 1}`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

      <div className="dropdown-container mt-5 d-flex flex-wrap justify-content-center">
        <Link to="/home" className="dropdown mx-2">
          <button className="dropdown-btn">All Songs</button>
        </Link>
        <Link to="/trendingnow" className="dropdown mx-2">
          <button className="dropdown-btn">Trending Now</button>
        </Link>
        <Link to="/oldsongs" className="dropdown mx-2">
          <button className="dropdown-btn">Old Songs</button>
        </Link>
        <Link to="/newsongs" className="dropdown mx-2">
          <button className="dropdown-btn">New Songs</button>
        </Link>
      </div>

      <div className="search-box mb-3 d-flex justify-content-center">
        <form className="w-100 d-flex justify-content-center">
          <input
            type="text"
            className="form-control"
            id="srch"
            placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
            style={{ width: '100%', maxWidth: '700px' }}
          />
        </form>
      </div>

      <div className="music-wrapper container">
        <div className="row">
          {allMusic?.length > 0 ? (
            allMusic.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <MusicCard music={item} />
              </div>
            ))
          ) : (
            <p className="no-music col-12 text-center">No music uploaded yet</p>
          )}
        </div>
      </div>

      <Footer1 />
    </>
  );
}

export default NewSongs;
