

import { AllMusicAPI } from '../services/allAPI'
import { useEffect, useState } from 'react'
import MusicCard from './MusicCard'
import { useSelector } from 'react-redux'

import Header from '../components/Header'
import { Link } from 'react-router-dom';
import Footer1 from '../components/Footer1'


import Carousel from 'react-bootstrap/Carousel';

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
  const [searchKey, setSearchKey] = useState("")
  console.log("search key", searchKey);
  console.log("=================searchkey", searchKey);
  //to access data inside store:useSelector hook
  const RecentlyArray = useSelector((state) => state.RecentlyplayedReducer);
  console.log("====RecentelyArray for home");
  console.log(RecentlyArray);


  const [allMusic, setallMusic] = useState([])
  const getAllMusic = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      const result = await AllMusicAPI(searchKey, reqHeader)
      console.log("result for all music");
      console.log(result);
      setallMusic(result.data)

    }
  }
  useEffect(() => {
    getAllMusic();
  }, [searchKey])

  return (
    <>
      <Header />

      <div className='mb-5 mt-5 p-5'></div>
      <div class="search-box">
        <form >
          <input type="text" className="form-control" id="srch" placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button type="submit"><i class="fa fa-search"></i></button>

        </form>
      </div>
    
      <div>
        {' '}
        <Carousel>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image5}
              alt='News Flash blurred'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image2}
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image3}
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image4}
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image9}
              alt='First slide'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image6}
              alt='News Flash blurred'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image1}
              alt='News Flash blurred'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image8}
              alt='News Flash blurred'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image7}
              alt='News Flash blurred'
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              style={{ height: '40vh' }}
              className='d-block w-100 movie'
              src={image10}
              alt='News Flash blurred'
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='d-flex justify-content-center alig-items-center  ' style={{ marginTop: "80px", marginLeft: "100px" }}>

        <div class="dropdown">
          <Link to='/home'>
            <button class='dropdown-btn' >All Music</button>
          </Link>
        </div>
        <div class="dropdown">
          <Link to='/trendingnow'>
            <button class='dropdown-btn' >Trending Now</button>
          </Link>
        </div>

        <div class="dropdown">
          <Link to='/oldsongs'>
            <button class='dropdown-btn' >Old songs</button>
          </Link>
        </div>

        <div class="dropdown">
          <Link to='/newsongs'>
            <button class='dropdown-btn' >New songs</button>
          </Link>
        </div>

      </div>

      <div class="wrapper "  >
        {
          allMusic?.length > 0 ?
            allMusic.map((item) => (
              <>

                <MusicCard music={item} />
              </>
            )) :
            <p style={{ marginRight: "230px" }} className='text-white mt-5 '>no music apploaded yet</p>
        }

      </div>




      <Footer1 />

    </>

  )
}

export default NewSongs