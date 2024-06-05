import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import likedsongs from '../assets/recently-played.png';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Download from './Download'; // Import the Download component
import { BASE_URL } from '../services/baseurl'; // Import BASE_URL
import Footer1 from '../components/Footer1'

function LikedSongs() {
  const RecentlyArray = useSelector((state) => state.RecentlyplayedReducer);
  const [downloadedSongs, setDownloadedSongs] = useState([]);

  const handleDownload = (audioUrl, title, image) => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.setAttribute('download', `${title}.mp3`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setDownloadedSongs([...downloadedSongs, { title, image, audio: audioUrl }]);
  };

  return (
    <>
    <div style={{marginTop:"-50px"}}>
      <Header />
      </div>
      <div className='mb-5 mt-5 p-5 ms-5'></div>
      <Link to='/home' style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "600", marginLeft: "400px" }}>
        <i className="fa-solid fa-arrow-left "></i> Back To Home
      </Link>

      <Container className='mt-5 mb-5'>
        <Row>
          <Col xs={12} md={4}>
            <img className='ms-5 img-fluid'
              src={likedsongs}
              alt="Recently Played" />
          </Col>
          <Col xs={12} md={6} className="text-center">
            <h1 style={{ marginTop: "50px" ,marginLeft:"40px"}}> Recently Played Songs</h1>
            <button className='btn btn-danger rounded mt-4' style={{ width:"200px" }}><i className="fa-solid fa-play"></i> Play Songs</button>
          </Col>
        </Row>
      </Container>

      
      <div className="table-responsive ms-5">
        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Audio</th>
              <th>Duration</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {RecentlyArray?.length > 0 ? (
              RecentlyArray.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td><img src={`${BASE_URL}/uploads/${item.image}`} width={'60px'} height={'50px'} alt="" /></td>
                  <td>{item.audio}</td>
                  <td>4:74</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleDownload(item.audio, item.title, item.image)}>
                      <i className="fa-solid fa-download"></i> Download
                    </button>
                    {downloadedSongs.includes(item.title) && <span style={{marginLeft: '5px', color: 'green'}}>Downloaded</span>}
                  </td>
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
      <Download downloadedSongs={downloadedSongs} /> {/* Pass downloaded songs as props */}
      <Footer1 />
    </>
  );
}

export default LikedSongs;
