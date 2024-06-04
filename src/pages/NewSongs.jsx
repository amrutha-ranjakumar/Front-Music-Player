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
import image4 from '../assets/BANNER4.png';
import image6 from '../assets/BANNER6.png';
import image7 from '../assets/BANNER7.png';
import image9 from '../assets/BANNER9.jpg';


function NewSongs() {
  const [searchKey,setSearchKey]=useState("")
    console.log("search key",searchKey);
    console.log("=================searchkey",searchKey);
//to access data inside store:useSelector hook
const RecentlyArray = useSelector((state)=>state.RecentlyplayedReducer);
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

<div className='mb-5  p-5'></div>

         
      <div className='mt-5'>
        {' '}
        <Carousel>
         
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
              src={image7}
              alt='News Flash blurred'
            />
          </Carousel.Item>
         
        </Carousel>
      </div>
      <div className="dropdown-container mt-5">
                <div className="dropdown">
                <Link to='/home'>
                        <button className="dropdown-btn">All Songs</button>
                    </Link>
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
                <div class="search-box mb-3">
                <form >
          <input type="text" className="form-control" id="srch" placeholder="Search"
            onChange={(e) => setSearchKey(e.target.value)}
            style={{width:"700px"}}
          />
         

        </form>
        </div>
      </div>
           

            <div className="music-wrapper"   >
                {allMusic?.length > 0 ? (
                    allMusic.map((item) => (
                        <MusicCard key={item.id} music={item} />
                    ))
                ) : (
                    <p className="no-music">No music uploaded yet</p>
                )}
            </div>



<Footer1 />


</>

)
}

export default NewSongs