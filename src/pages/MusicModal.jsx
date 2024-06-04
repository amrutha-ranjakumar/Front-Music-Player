import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { BASE_URL } from '../services/baseurl';
import Modal from 'react-bootstrap/Modal';
import Advertisments from './Advertisments';

function MusicModal({ music }) {

  const [show, setShow] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false); // State to track if audio has ended

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const [audio] = useState(new Audio(`${BASE_URL}/uploads/${music.audio}`));
 
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
 

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]); 

  useEffect(() => {
    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleSongEnd = () => {
      setCurrentTime(0);
      setIsPlaying(false);
      setAudioEnded(true); // Set audioEnded state to true when audio ends
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [audio]);

  useEffect(() => {
    // Set isPlaying to true when the component mounts to play audio automatically
    setIsPlaying(true);
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <Container fluid style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', marginLeft: "240px" }}>
        <Row style={{ flexGrow: 1 }}>
          <Col md={6} style={{ marginTop: "160px" }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Card style={{ width: '50%', textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)', marginLeft: "200px" }}>
              <Card.Img variant="top" src={`${BASE_URL}/uploads/${music.image}`} alt="Album Cover" style={{ width: '90%', margin: 'auto', marginBottom: '20px', height: '350px' }} />
                <Card.Body style={{ position: 'relative' }}>
                  <div style={{ position: 'relative', width: '100%', margin: 'auto' }}>
                    <input
                      value={currentTime}
                      max={duration}
                      onChange={handleSeek}
                    
                      type="range"
                      style={{
                        width: '100%',
                        height: '8px',
                        borderRadius: '5px',
                        outline: 'none',
                        backgroundColor: 'black',
                        appearance: 'none',
                        marginTop: '10px',
                        cursor: 'pointer'
                      }}
                    />
                    <div style={{ position: 'absolute', top: '-20px', right: '0', fontSize: '0.8em' }}>
                      {formatTime(currentTime)}
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                  <button  style={{ border: 'none', backgroundColor: 'black', marginRight: '10px' }}>
                    <FaStepBackward style={{ fontSize: '1.5em', borderRadius: '50%', backgroundColor: 'black', cursor: "pointer" }} />
                  </button>
                  <div
                    onClick={togglePlayPause}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: 'black',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    {isPlaying ? (
                      <FaPause style={{ fontSize: '2em', color: 'black' }} />
                    ) : (
                      <FaPlay style={{ fontSize: '2em', color: 'black' }} />
                    )}
                  </div>
                  <button  style={{ border: 'none', backgroundColor: 'transparent', marginLeft: '10px' }}>
                    <FaStepForward style={{ fontSize: '1.5em', borderRadius: '50%', backgroundColor: 'black', cursor: "pointer" }} />
                  </button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
    
      {audioEnded && <Advertisments music={music}/>} {/* Render Advertisments.jsx only when audio has ended */}
    </>
  );
}

export default MusicModal;
