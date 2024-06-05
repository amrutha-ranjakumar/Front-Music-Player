import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { BASE_URL } from '../services/baseurl';
import Advertisments from './Advertisments';

function MusicModal({ music }) {
  const [show, setShow] = useState(false);
  const [audioEnded, setAudioEnded] = useState(false);
  const [audio] = useState(new Audio(`${BASE_URL}/uploads/${music.audio}`));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (isPlaying) {
      audio.play();
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  useEffect(() => {
    const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
    const handleLoadedMetadata = () => setDuration(audio.duration);
    const handleSongEnd = () => {
      setCurrentTime(0);
      setIsPlaying(false);
      setAudioEnded(true);
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

  useEffect(() => setIsPlaying(true), []);

  const togglePlayPause = () => setIsPlaying(!isPlaying);
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
      <Container fluid className="d-flex flex-column justify-content-center align-items-center mt-5">
        <Row className="w-100 justify-content-center">
          <Col xs={12} md={8} lg={6} className="text-center">
            <Card className="shadow-sm mb-4">
              <Card.Img
                variant="top"
                src={`${BASE_URL}/uploads/${music.image}`}
                alt="Album Cover"
                className="img-fluid"
                style={{ maxHeight: '350px', objectFit: 'cover' }}
              />
              <Card.Body>
                <div>
                  <input
                    value={currentTime}
                    max={duration}
                    onChange={handleSeek}
                    type="range"
                    className="w-100"
                    style={{ height: '8px', borderRadius: '5px', outline: 'none', backgroundColor: '#ccc' }}
                  />
                  <div className="d-flex justify-content-between mt-2">
                    <div>{formatTime(currentTime)}</div>
                    <div>{formatTime(duration)}</div>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button onClick={togglePlayPause} className="btn btn-link p-0 mr-3">
                    <FaStepBackward size="1.5em" />
                  </button>
                  <button onClick={togglePlayPause} className="btn btn-primary rounded-circle p-3 mx-3">
                    {isPlaying ? <FaPause size="1.5em" /> : <FaPlay size="1.5em" />}
                  </button>
                  <button onClick={togglePlayPause} className="btn btn-link p-0 ml-3">
                    <FaStepForward size="1.5em" />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {audioEnded && <Advertisments music={music} />}
    </>
  );
}

export default MusicModal;
