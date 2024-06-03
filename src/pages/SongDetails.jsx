import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, Button, Modal } from 'react-bootstrap';
import { FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../services/baseurl';
import Review from './Review'
import MusicModal from './MusicModal';
import Header from '../components/Header';
import Footer1 from '../components/Footer1'

function SongDetails({ music }) {
  const songDetailsItem = useSelector((state) => state.songDetailReducer);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>

      <Header />
      <div style={{ marginLeft: "700px" }}>
        <hr style={{ marginBottom: "-300px", marginLeft: "-1200px" }} />

        <h4 className='text-center ' style={{ marginTop: "600px" }}><span className='text-danger'>Song</span> Details</h4>
        <hr style={{ width: "1300px" }} />

        {songDetailsItem?.length > 0 ? (
          songDetailsItem.map(item => (
            <ListGroup key={item._id} style={{ width: "1100px", marginLeft: "100px" }}>
              <ListGroup.Item style={{ backgroundColor: "black" }}><h4 className='text-center'>{item.title}</h4></ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "black" }}><h5 className='text-center'>Movie<span className='text-warning'> {item.movie}</span></h5></ListGroup.Item>


              <ListGroup.Item style={{ backgroundColor: "black" }}><h5 className='text-center'>Directed by<span className='text-warning'> {item.Directed}</span></h5></ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "black" }}><h5 className='text-center'>Produced by<span className='text-warning'> {item.Producer}</span></h5></ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "black" }}><h5 className='text-center'>Music by<span className='text-warning'> {item.Music}</span></h5></ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "black" }}><h5 className='text-center'>Actors<span className='text-warning'> {item.Actors}</span></h5></ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "black" }} className='text-center ' >

                <button className='btn btn-warning' style={{ marginLeft: "200px" }} onClick={handleShow}>Click here to see Lyrics</button>
                <Review music={item} />

              </ListGroup.Item>

              <div style={{ marginTop: "-760px", marginLeft: "-900px" }}>
                <MusicModal music={item} />

              </div>
              <hr style={{ marginTop: '-200px', width: "1300px", marginLeft: "-100px" }} />
            </ListGroup>

          ))
        ) : (
          <p>No reviews found</p>
        )}
      </div>
      <div style={{ maxWidth: '900px' }}>
        <Modal show={show} onHide={handleClose} >
          <Modal.Header closeButton style={{ backgroundColor: 'black', color: 'white' }}>
            <Modal.Title>Lyrics</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{ backgroundColor: 'black', color: 'white' }}>
            {songDetailsItem?.length > 0 ? (
              songDetailsItem.map(item => (

                <h3 key={item._id} style={{ fontSize: '20px', lineHeight: '2.6' }}>
                  {item.lyrics}
                </h3>
              ))
            ) : (
              <p>No lyrics found</p>
            )}

          </Modal.Body>
          <Modal.Footer style={{ backgroundColor: 'black', color: 'white' }}>
            <Button variant="secondary" className='btn btn-danger' onClick={handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div style={{ marginTop: "200px" }}>
        <Footer1 />
      </div>
    </>
  );
}

export default SongDetails;
