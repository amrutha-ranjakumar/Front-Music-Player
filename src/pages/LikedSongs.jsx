import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import likedsongs from '../assets/liked-songs.png';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Download from './Download';
import { BASE_URL } from '../services/baseurl';
import Footer1 from '../components/Footer1';


function LikedSongs() {
  const LikedItem = useSelector((state) => state.LikedsongReducer);
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
      <Header />
      <div className='mb-5 mt-5 p-5 ms-5'></div>
      <Link to='/home' style={{ textDecoration: "none", color: "white", fontSize: "20px", fontWeight: "600", marginLeft: "400px" }}>
        <i className="fa-solid fa-arrow-left "></i> Back To Home
      </Link>

      <Container className='mt-5 mb-5'>
        <Row className='justify-content-center align-items-center'>
          <Col xs={12} md={4} className="text-center mb-4">
            <img
              src={likedsongs}
              alt="Liked Songs"
              className='img-fluid'
             
            />
          </Col>
          <Col xs={12} md={6} className="text-center mb-4">
            <h1 className="mb-3">Liked Songs</h1>
            <button className='btn btn-danger rounded' style={{ width:"200px" }}>
              <i className="fa-solid fa-play"></i> Play Songs
            </button>
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
            {LikedItem?.length > 0 ? (
              LikedItem.map((item, index) => (
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

      <Download downloadedSongs={downloadedSongs} />
      <Footer1 />
    </>
  );
}

export default LikedSongs;
