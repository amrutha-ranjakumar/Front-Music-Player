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
import Trendingnow from '../assets/trending-now-trending-now.webp'
import { BASE_URL } from '../services/baseurl';

function TrendingNow() {
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
    <div className='mb-5 p-5'></div>
    <div className='mb-5 mt-5 p-5'>
    <Link to='/home' style={{textDecoration:"none",color:"white", fontSize:"20px",fontWeight:"600",marginLeft:"400px"}}>
        <i class="fa-solid fa-arrow-left "></i> Back To Home
      </Link>
    <Container className='mt-5 mb-5 d-flex justify-content-between '>
 
  <Row >
    <Col>
    <img 
    width={'400px'}
  
    src={Trendingnow} alt="" />
    
    </Col>
    <Col>

   <h1 style={{display:"inline-block",marginTop:"100px"}}> TrendingNow</h1>
  
    <button style={{marginBottom:"500px"}} className='btn btn-danger mt-5 ms-4'><i class="fa-solid fa-play"></i> Play Songs</button>
  
    
    
    </Col>
  </Row>

</Container>
<table className='table container  ' style={{marginTop: "-300px"}}>
    <thead>

    <tr>
<th>#</th>
<th>Title</th>
<th>Image</th>

<th>Audio</th>
<th>duration</th>
<th>Action</th>

</tr>

    </thead>

<tbody>
  {
    allMusic?.length>0?
    allMusic.map((item,index)=>(
      <tr>
      <td>{index+1}</td>
      <td>{item.title}</td>
      <td><img src={`${BASE_URL}/uploads/${item.image}`} width={'70px'} height={'100%'} alt="" />
      
   
      
      </td>
      <td>{item.audio}</td>
    
      <td>4:74</td>
      <td> <i class="fa-solid fa-download"></i></td>
  </tr>


    )):
    <p></p>
  }
 
</tbody>
</table>
</div>

    </>
  )
}

export default TrendingNow