import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import recentlyplayed from '../assets/recently-played.png'
import songimage from '../assets/Heeriye.jpg'
import { Link } from 'react-router-dom';
import { BASE_URL } from '../services/baseurl';
import { useSelector } from 'react-redux';
import Header from '../components/Header';




function RecentlyPlayed({music}) {
  const RecentlyplayedItem = useSelector((state)=>state.RecentlyplayedReducer)
  
  console.log("uujjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
  console.log(RecentlyplayedItem);
 //to access data inside store:useSelector hook
//  const Recentlyplayed = useSelector({})

  return (
    <>
    <Header/>
        <div className='mb-5 mt-5 p-5 ms-5'></div>
        <Link to='/home' style={{textDecoration:"none",color:"white", fontSize:"20px",fontWeight:"600",marginLeft:"400px"}}>
        <i class="fa-solid fa-arrow-left "></i> Back To Home
      </Link>
    
        <Container className='mt-5 mb-5 d-flex justify-content-between '>
      <Row >
        <Col>
        <img className='ms-5'
        width={'350px'}
      
        src={recentlyplayed}
        alt="" />
      
        
        </Col>
        <Col>
    
       <h1 style={{display:"inline-block",marginTop:"100px"}}> Recently Played</h1>
      
        <button style={{marginBottom:"500px"}} className='btn btn-danger mt-5 ms-4'><i class="fa-solid fa-play"></i> Play Songs</button>
      
        
        
        </Col>
      </Row>
    
    </Container>
    <div style={{ marginTop: "-300px" }}>
      <table className='table container'>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>image</th>
            <th>audio</th>
            <th>Dutation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {RecentlyplayedItem?.length > 0 ? (
            RecentlyplayedItem.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td><img src={`${BASE_URL}/uploads/${item.image}`} width={'70px'} height={'100%'} alt="" /></td>
                <td>{item.audio}</td>
                <td>4:74</td>
                <td><i className="fa-solid fa-download"></i></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No items in Recently played</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>

    </>
  

  )
}

export default RecentlyPlayed