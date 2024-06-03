import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { BASE_URL } from '../services/baseurl';
import Modal from 'react-bootstrap/Modal';
import img4 from '../assets/advertisment.jpg';
import { Link } from 'react-router-dom';

function MusicModal({ music }) {

  const [show, setShow] = useState(true); // Set initially to true to display the modal

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isPlayings, setIsPlayings] = useState(false);
  const [currentTimes, setCurrentTimes] = useState(0);
  const [durations, setDurations] = useState(0);

  const [premium] = useState(new Audio(`${BASE_URL}/uploads/${music.premium}`));

  useEffect(() => {
    togglePlayPauses(); // Automatically start playing audio when the modal is shown
  }, []);

  useEffect(() => {
    if (isPlayings) {
      premium.play();
    } else {
      premium.pause();
    }
  }, [isPlayings, premium]);

  useEffect(() => {
    const handleTimeUpdates = () => {
      setCurrentTimes(premium.currentTime);
    };

    const handleLoadedMetadatas = () => {
      setDurations(premium.duration);
    };

    const handleSongEnds = () => {
      setCurrentTimes(0);
      setIsPlayings(false);
    };

    premium.addEventListener('timeupdate', handleTimeUpdates);
    premium.addEventListener('loadedmetadata', handleLoadedMetadatas);
    premium.addEventListener('ended', handleSongEnds);

    return () => {
      premium.removeEventListener('timeupdate', handleTimeUpdates);
      premium.removeEventListener('loadedmetadata', handleLoadedMetadatas);
      premium.removeEventListener('ended', handleSongEnds);
    };
  }, [premium]);

  const togglePlayPauses = () => {
    setIsPlayings(!isPlayings);
  };

  const handleSeeks = (e) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTimes(newTime);
    premium.currentTime = newTime;
  };

  const formatTimes = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <div>
        <Modal 
          show={show} 
          onHide={handleClose} 
          keyboard={false} 
        >
          <Modal.Header closeButton style={{ width: '200%', maxWidth: '1200px', backgroundColor: "black", marginTop: "-10px", marginLeft: '-300px' }}>
          </Modal.Header>
          <Modal.Body style={{ width: "1000px", marginLeft: '-300px', backgroundColor: "black" }}>
            <div style={{ alignItems: 'center', backgroundColor: "black" }}>
              {/* Left side content */}
              <div style={{ marginRight: '70px', backgroundColor: "black" }}>
              
               
                <Link  to='payments' >
                <button className='btn btn-danger'>Explore Premium <i class="fa-solid fa-crown" style={{color:"orange"}}></i></button>
                </Link>
              </div>
              {/* Right side content */}
              <div style={{ flex: 1, width: '100%', backgroundColor: "black" }}>
                <Card style={{ width: '100%', textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)', backgroundColor: "black" }}>
                  <Card.Img variant="top" src={img4} alt="Advertisement" style={{ width: '60%', margin: 'auto', marginBottom: '20px', height: '300px' }} />
                  <Card.Body style={{ flex: 1, width: '100%', backgroundColor: "black" }} >
                    <div style={{ position: 'relative', width: '100%', margin: 'auto', backgroundColor: "black" }}>
                      <input
                        type="range"
                        value={currentTimes}
                        max={durations}
                        onChange={handleSeeks}
                        style={{
                          width: '100%',
                          height: '8px',
                          borderRadius: '5px',
                          outline: 'none',
                          backgroundColor: '#ddd',
                          appearance: 'none',
                          marginTop: '10px',
                          cursor: 'pointer'
                        }}
                      />
                      <div style={{ position: 'absolute', top: '-20px', right: '0', fontSize: '0.8em' }}>
                        {formatTimes(currentTimes)}
                      </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                      <button style={{ border: 'none', backgroundColor: 'transparent', marginRight: '10px' }}>
                        <FaStepBackward style={{ fontSize: '1.5em', borderRadius: '50%', backgroundColor: 'black', cursor: "pointer" }} />
                      </button>
                      <div
                        onClick={togglePlayPauses}
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
                        {isPlayings ? (
                          <FaPause style={{ fontSize: '2em', color: '#555' }} />
                        ) : (
                          <FaPlay style={{ fontSize: '2em', color: '#555' }} />
                        )}
                      </div>
                      <button style={{ border: 'none', backgroundColor: 'transparent', marginLeft: '10px' }}>
                        <FaStepForward style={{ fontSize: '1.5em', borderRadius: '50%', backgroundColor: 'black', cursor: "pointer" }} />
                      </button>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default MusicModal;
