import React, { useEffect } from 'react'
import image1 from '../assets/BANNER1.jpg'
import image2 from '../assets/BANNER2.jpg'
import image3 from '../assets/BANNER3.png'
import image4 from '../assets/BANNER4.png'
import image5 from '../assets/BANNER5.jpg'
import image6 from '../assets/BANNER6.png'
import image7 from '../assets/BANNER7.png'
import image8 from '../assets/BANNER8.jpg'
import image9 from '../assets/BANNER9.jpg'
import image10 from '../assets/BANNRER10.jpg'

import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { Button } from 'react-bootstrap'
import './Home.css'
import Card from 'react-bootstrap/Card';
import recentlyplayed from '../assets/recently-played.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LikedSongs from '../assets/liked-songs.png'

import { AllMusicAPI } from '../services/allAPI'
import { useState } from 'react'
import MusicCard from './MusicCard'
import { useSelector } from 'react-redux'
import { Badge } from 'react-bootstrap';
import Header from '../components/Header'


function Home() {
  const [searchKey,setSearchKey]=useState("")
    console.log("search key",searchKey);
    console.log("=================searchkey",searchKey);
//to access data inside store:useSelector hook
const RecentlyArray = useSelector((state)=>state.RecentlyplayedReducer);
// const likedArray = useSelector((state)=>state.TopAlbumsReducer)
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
      const result = await AllMusicAPI(searchKey,reqHeader)
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
<Header/>

      <div className='mb-5 mt-5 p-5'></div>
      <div class="search-box">
                    <form >
                        <input type="text" className="form-control" id="srch" placeholder="Search"
                        onChange={(e)=>setSearchKey(e.target.value)}  
                         />
                        <button type="submit"><i class="fa fa-search"></i></button>
                    
                    </form>
                </div>
      <div > <Carousel>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image5} alt="News Flash blurred" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image2} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image3} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image4} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image9} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image6} alt="News Flash blurred" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image1} alt="News Flash blurred" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image8} alt="News Flash blurred" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image7} alt="News Flash blurred" />
        </Carousel.Item>
        <Carousel.Item>
          <img style={{ height: "40vh" }} className='d-block w-100 movie' src={image10} alt="News Flash blurred" />
        </Carousel.Item>
      </Carousel></div>

      <div className='d-flex justify-content-center alig-items-center  ' style={{ marginTop: "80px", marginLeft: "100px" }}>

        <div class="dropdown">
          <button class='dropdown-btn' >All Music</button>
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
            <p style={{marginRight:"230px"}} className='text-white mt-5 '>no music apploaded yet</p>
        }

      </div>


      <Container>
        <Row className=' mt-3 ms-5' >
          <Col>


            <Card style={{ width: '18rem' }}>
              <Link to='/recentlyplayed'>
                <Card.Img variant="top" src={recentlyplayed} />
              

              </Link>
              {/* <Badge style={{fontSize:'30px'}} bg=''>{RecentlyArray.length}</Badge> */}

            </Card>
            </Col>
          <Col className='mt-1 '>
            <Card style={{ width: '18rem'}}>
              <Link to={'/TopAlbums'}>
                <Card.Img variant="top" src={LikedSongs} />
              </Link>
              {/* <Badge  style={{fontSize:'30px'}}  bg='' >{likedArray.length}</Badge> */}


            </Card>
          </Col>
        </Row>

      </Container>



    </>

  )
}

export default Home