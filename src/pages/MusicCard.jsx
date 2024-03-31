import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import { Card } from 'react-bootstrap';
import { BASE_URL } from '../services/baseurl';
import './MusicCard.css';
import { useDispatch } from 'react-redux';
import { addToRecentlyplayed } from '../Redux/slices/Recentelyplayed';

function MusicCard({ music }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [audio] = useState(new Audio(`${BASE_URL}/uploads/${music.audio}`));

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);


const dispatch = useDispatch()





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
    if (show) {
      setIsPlaying(true);
    }
  }, [show]);

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

  const playNextSong = () => {
    // Logic to play the next song
  };

  const playPreviousSong = () => {
    // Logic to play the previous song
  };

  return (
    
   
    <>
   
   <div >
   <div className="box">
        <img className="round" src={`${BASE_URL}/uploads/${music.image}`} height={"200px"} width={"200px"} alt="" />
        <h5 className="mt-2">{music.title}</h5>
        <h5 className="row mt-4" style={{ marginLeft: "60px" }} ></h5>
        <div className="d-flex align-items-center justify-content-between">
          <Button
             onClick={()=>dispatch(addToRecentlyplayed(music))}
          
          variant="outline-danger"><i className="fas fa-heart"></i></Button>

          <Button 
          
          onClick={()=>dispatch(addToRecentlyplayed(music))}
          variant="outline-success"><i className="fas fa-play ms-1" onClick={handleShow}></i></Button>
        </div>
      </div>
   </div>
     
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} 
        style={{ width: '100%', maxWidth: '60000px', minWidth:"600px",marginRight: '800%' }} // Set modal width and max width
      >
        <Modal.Header closeButton  style={{ width: '100%', maxWidth: '800px'}}>
          <Modal.Title>{music.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body  >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '100%', textAlign: 'center', padding: '20px', boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)' }}>
              <Card.Img variant="top" src={`${BASE_URL}/uploads/${music.image}`} alt="Album Cover" style={{ width: '90%', margin: 'auto', marginBottom: '20px', height: '350px' }} />
              <Card.Body style={{ position: 'relative' }}>
                <div style={{ position: 'relative', width: '100%', margin: 'auto' }}>
                  <input
                    type="range"
                    value={currentTime}
                    max={duration}
                    onChange={handleSeek}
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
                    {formatTime(currentTime)}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                  <button onClick={playPreviousSong} style={{ border: 'none', backgroundColor: 'transparent', marginRight: '10px' }}>
                    <FaStepBackward style={{ fontSize: '1.5em', borderRadius: '50%', backgroundColor: '#ddd', cursor: "pointer" }} />
                  </button>
                  <div
                    onClick={togglePlayPause}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      backgroundColor: '#ddd',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    {isPlaying ? (
                      <FaPause style={{ fontSize: '2em', color: '#555' }} />
                    ) : (
                      <FaPlay style={{ fontSize: '2em', color: '#555' }} />
                    )}
                  </div>
                  <button onClick={playNextSong} style={{ border: 'none', backgroundColor: 'transparent', marginLeft: '10px' }}>
                    <FaStepForward style={{ fontSize: '1.5em', borderRadius: '50%', backgroundColor: '#ddd', cursor: "pointer" }} />
                  </button>
                </div>
              </Card.Body>
            </Card>
        
          </div>
          </Modal.Body>
        </Modal>
        </>
  )
}

export default MusicCard
