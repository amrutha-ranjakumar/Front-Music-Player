import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Footer1 from '../components/Footer1';
import Review from './Review';
import MusicModal from './MusicModal';

function SongDetails({ music }) {
  const songDetailsItem = useSelector((state) => state.songDetailReducer);
  const [show, setShow] = useState(false);
  const [selectedLyrics, setSelectedLyrics] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = (lyrics) => {
    setSelectedLyrics(lyrics);
    setShow(true);
  };

  return (
    <>
    <div style={{marginTop:"-10px"}}>
    <Header  />

    </div>
      
      <Container className="" >
        <Row className="justify-content-center">
          <Col xs={10} className="text-center">
            <h1 className="text-center my-4 "  >
              <span className="text-danger">Song</span> Details
            </h1>
          </Col>
        </Row>
        {songDetailsItem?.length > 0 ? (
          songDetailsItem.map(item => (
            <Card key={item._id} className="mb-4 shadow-sm" >
              <Card.Header className="d-flex justify-content-center">
                <MusicModal music={item} />
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col xs={12} className="text-center mb-3">
                    <h4>{item.title}</h4>
                  </Col>
                  <Col xs={12} md={6} className="mb-3 text-center">
                    <h5>Movie: <span className="text-warning">{item.movie}</span></h5>
                  </Col>
                  <Col xs={12} md={6} className="mb-3 text-center">
                    <h5>Directed by: <span className="text-warning">{item.Directed}</span></h5>
                  </Col>
                  <Col xs={12} md={6} className="mb-3 text-center">
                    <h5>Produced by: <span className="text-warning">{item.Producer}</span></h5>
                  </Col>
                  <Col xs={12} md={6} className="mb-3 text-center">
                    <h5>Music by: <span className="text-warning">{item.Music}</span></h5>
                  </Col>
                  <Col xs={12} className="mb-3 text-center">
                    <h5>Actors: <span className="text-warning">{item.Actors}</span></h5>
                  </Col>
                  <Col xs={12} className="text-center">
                    <Button variant="warning" onClick={() => handleShow(item.lyrics)}>
                      Click here to see Lyrics
                    </Button>
                  </Col>
                </Row>
                <Review music={item} />
              </Card.Body>
            </Card>
          ))
        ) : (
          <div className="text-center">
            <img
              style={{ width: "100%", maxWidth: "400px", borderRadius: "30%" }}
              src="https://i.pinimg.com/564x/ea/37/ea/ea37ea689a2f2a928dd88026cebe8615.jpg"
              alt="No song details found"
            />
            <p>No song details found</p>
          </div>
        )}
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Lyrics</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '1rem', color: 'black' }}>
          {selectedLyrics}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer1 />
    </>
  );
}

export default SongDetails;
