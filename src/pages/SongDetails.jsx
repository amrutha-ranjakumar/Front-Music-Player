import React, { useState } from 'react';
import { Container, Row, Col, ListGroup, Button, Modal } from 'react-bootstrap';
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
      <Header />
      <Container className=" "   >
        <Row className="justify-content-center" >
          <Col xs={8} className="text-center">
            <h1 className="text-center " style={{ marginTop: "200px" }}   >
              <span className="text-danger ">Song</span> Details
            </h1>

          </Col>
        </Row>



        {songDetailsItem?.length > 0 ? (
          songDetailsItem.map(item => (

            <ListGroup key={item._id} className="mb-4"  >
              <div style={{ marginLeft: "-500px" }}>
                <MusicModal music={item} /></div>
              <ListGroup.Item className="  text-center " style={{ marginLeft: "300px", marginTop: "-900px" }}>
                <h4>{item.title}</h4>
              </ListGroup.Item>
              <ListGroup.Item className=" text-light text-center" style={{ marginLeft: "300px" }}>
                <h5>Movie: <span className="text-warning">{item.movie}</span></h5>
              </ListGroup.Item>
              <ListGroup.Item className=" text-light text-center" style={{ marginLeft: "300px" }}>
                <h5>Directed by: <span className="text-warning">{item.Directed}</span></h5>
              </ListGroup.Item>
              <ListGroup.Item className=" text-light text-center" style={{ marginLeft: "300px" }}>
                <h5>Produced by: <span className="text-warning">{item.Producer}</span></h5>
              </ListGroup.Item>
              <ListGroup.Item className=" text-light text-center" style={{ marginLeft: "300px" }}>
                <h5>Music by: <span className="text-warning">{item.Music}</span></h5>
              </ListGroup.Item>
              <ListGroup.Item className=" text-light text-center" style={{ marginLeft: "300px" }}>
                <h5>Actors: <span className="text-warning">{item.Actors}</span></h5>
              </ListGroup.Item>
              <ListGroup.Item className=" text-light text-center" style={{ marginLeft: "300px" }}>
                <Button variant="warning" onClick={() => handleShow(item.lyrics)}>
                  Click here to see Lyrics
                </Button>
                <Review music={item} />
              </ListGroup.Item>
            </ListGroup>


          ))
        ) : (
          <div>
            <img style={{ width: "400px", borderRadius: "30%", marginLeft: "450px" }} src="https://i.pinimg.com/564x/ea/37/ea/ea37ea689a2f2a928dd88026cebe8615.jpg" alt="" />
            <p className="text-center">No song details found</p>
          </div>
        )}

      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          style={{

            borderBottom: 'none',
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
            padding: '1rem'
          }}
        >
          <Modal.Title style={{ color: '#fff', fontWeight: '600', fontSize: '1.5rem' }}>Lyrics</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: 'white',
            color: '#ddd',
            padding: '1.5rem',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            maxHeight: '500px',
            overflowY: 'auto'

          }}
        >
          <div style={{ whiteSpace: 'pre-wrap', lineHeight: '1.6', fontSize: '1rem', color: 'black' }}>
            {selectedLyrics}
          </div>
        </Modal.Body>
        <Modal.Footer
          style={{
            backgroundColor: 'light-blue',
            borderTop: 'none',
            borderBottomLeftRadius: '15px',
            borderBottomRightRadius: '15px',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Button
            variant="outline-light"
            onClick={handleClose}
            style={{
              borderRadius: '50px',
              padding: '0.5rem 1.5rem',
              fontSize: '2rem',
              fontWeight: '500',
              transition: 'all 0.3s ease',
              color: 'black'
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>



      <Footer1 />
    </>
  );
}

export default SongDetails;
