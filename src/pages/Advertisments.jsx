import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal, Button } from 'react-bootstrap';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { BASE_URL } from '../services/baseurl';
import img4 from '../assets/advertisment.jpg';
import { Link } from 'react-router-dom';

function MusicModal({ music }) {
  const [show, setShow] = useState(true); 
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [premium] = useState(new Audio(`${BASE_URL}/uploads/${music.premium}`));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    togglePlayPause(); 
  }, []);

  useEffect(() => {
    if (isPlaying) {
      premium.play();
    } else {
      premium.pause();
    }
  }, [isPlaying, premium]);

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(premium.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(premium.duration);
    };

    const handleSongEnd = () => {
      setCurrentTime(0);
      setIsPlaying(false);
    };

    premium.addEventListener('timeupdate', handleTimeUpdate);
    premium.addEventListener('loadedmetadata', handleLoadedMetadata);
    premium.addEventListener('ended', handleSongEnd);

    return () => {
      premium.removeEventListener('timeupdate', handleTimeUpdate);
      premium.removeEventListener('loadedmetadata', handleLoadedMetadata);
      premium.removeEventListener('ended', handleSongEnd);
    };
  }, [premium]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    premium.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton className=" text-light"></Modal.Header>
  
      <Modal.Body className=" text-light">
      <hr />
        <Container fluid>
          <Row className="mb-4">
            <Col xs={12} className="text-center">
              <Link to="payments">
                <Button variant="danger" className="mb-3">
                  Explore Premium <i className="fa-solid fa-crown" style={{ color: 'orange' }}></i>
                </Button>
              </Link>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={8} className="text-center mb-4">
              <Card className="text-light">
                <Card.Img variant="top" src={img4} alt="Advertisement" className="img-fluid" />
                <Card.Body>
                  <div className="w-100 mb-3">
                    <input
                      type="range"
                      value={currentTime}
                      max={duration}
                      onChange={handleSeek}
                      className="w-100"
                      style={{
                        height: '8px',
                        borderRadius: '5px',
                        outline: 'none',
                        // backgroundColor: 'black',
                        appearance: 'none',
                        cursor: 'pointer',
                      }}
                    />
                    <div className="d-flex justify-content-between mt-1">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button variant="outline-light" className="mx-2" style={{ fontSize: '1.5em' }} onClick={() => (premium.currentTime -= 10)}>
                      <FaStepBackward style={{ fontSize: '1.5em', backgroundColor: 'black', }} />
                    </Button>
                    <Button variant="outline-light" className="mx-2" style={{ fontSize: '1.5em' }} onClick={togglePlayPause}>
                      {isPlaying ? <FaPause style={{ fontSize: '2em', backgroundColor: 'black', }} /> : <FaPlay style={{ fontSize: '2em' }} />}
                    </Button>
                    <Button variant="outline-light" className="mx-2"style={{ fontSize: '1.5em' }} onClick={() => (premium.currentTime += 10)}>
                      <FaStepForward style={{ fontSize: '1.5em',backgroundColor:'black' }} />
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default MusicModal;
