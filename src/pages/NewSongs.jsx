import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LikedSongs from '../assets/liked-songs.png'

import { AllMusicAPI } from '../services/allAPI'
import { useEffect, useState } from 'react'
import MusicCard from './MusicCard'
import { useSelector } from 'react-redux'
import { Badge } from 'react-bootstrap';
import Header from '../components/Header'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import recentlyplayed from '../assets/recently-played.png'

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

<div className='mb-5 mt-5 p-5'></div>
<div class="search-box">
              <form >
                  <input type="text" className="form-control" id="srch" placeholder="Search"
                  onChange={(e)=>setSearchKey(e.target.value)}  
                   />
                  <button type="submit"><i class="fa fa-search"></i></button>
              
              </form>
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
  <Col className='mt-1 ,ms-3'>
    <Card style={{ width: '18rem'}}>
      <Link to={'/TopAlbums'}>
        <Card.Img variant="top" src={LikedSongs} />
      </Link>
      {/* <Badge  style={{fontSize:'30px'}}  bg='' >{RecentlyArray.length}</Badge> */}


    </Card>
  </Col>
</Row>

</Container>



</>

)
}

export default NewSongs