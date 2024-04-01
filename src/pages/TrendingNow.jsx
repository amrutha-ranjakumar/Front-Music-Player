import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AllMusicAPI } from '../services/allAPI';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import Header from '../components/Header';
import trendingnow from '../assets/trending-now-trending-now.webp';
import { BASE_URL } from '../services/baseurl';

function TrendingNow() {
  const [searchKey, setSearchKey] = useState('');
  const [allMusic, setAllMusic] = useState([]);
  const RecentlyArray = useSelector((state) => state.RecentlyplayedReducer);
  const [show, setShow] = useState(false);
  const [audio] = useState(new Audio()); // Initialize audio object
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [music, setMusic] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (music) => {
    setMusic(music);
    setShow(true);
  };

  const getAllMusic = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const result = await AllMusicAPI(searchKey, reqHeader);
      setAllMusic(result.data);
    }
  };

  useEffect(() => {
    getAllMusic();
  }, [searchKey]);

  // Audio player functions
  useEffect(() => {
    // Set audio source when music changes
    if (music.audio) {
      audio.src = `${BASE_URL}/uploads/${music.audio}`;
    }
  }, [music]);

  useEffect(() => {
    if (isPlaying) {
      audio.play(); // Start playing audio
    } else {
      audio.pause(); // Pause audio
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
      setIsPlaying(true); // Start playing when modal is shown
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
      <Header />
      <div className="mb-5 p-5"></div>
      <div className="mb-5 mt-5 p-5">
        <Link to="/home" style={{ textDecoration: 'none', color: 'white', fontSize: '20px', fontWeight: '600', marginLeft: '10px' }}>
          <i className="fa-solid fa-arrow-left"></i> Back To Home
        </Link>
        <Container className=" mb-5 d-flex flex-column align-items-center">
          <Row className="justify-content-center" >
            <Col xs={12} md={6} className="text-center  mt-5 p-2">
              <img width={'70%'} src={trendingnow} alt="" />
            </Col>
            <Col xs={12} md={6} className="text-center  " style={{marginLeft:"-80px",marginTop:"120px"}}>
              <h2 style={{marginRight:"-60px"}}>Trending Now</h2>
              <button className="btn btn-danger mt-5 ms-5">
                <i className="fa-solid fa-play"></i> Play Songs
              </button>
            </Col>
          </Row>
        </Container>
        <table className="table container">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Audio</th>
              <th>Duration</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allMusic?.length > 0 ? (
              allMusic.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td>
                    <img
                      src={`${BASE_URL}/uploads/${item.image}`}
                      width={'70px'}
                      height={'100%'}
                      onClick={() => handleShow(item)}
                      alt=""
                    />
                  </td>
                  <td>{item.audio}</td>
                  <td>4:74</td>
                  <td>
                    <i className="fa-solid fa-download"></i>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal
  show={show}
  onHide={handleClose}
  backdrop="static"
  keyboard={false}
  centered
  style={{width:"50%"}}
>
  <Modal.Header closeButton>
    <Modal.Title>{music.title}</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <div className="text-center">
      <Card style={{ width: '100%', maxWidth: '400px', textAlign: 'center', padding: '10px', boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)', margin: 'auto' }}>
        <Card.Img variant="top" src={`${BASE_URL}/uploads/${music.image}`} alt="Album Cover" style={{ width: '100%', marginBottom: '20px', maxHeight: '350px', objectFit: 'cover' }} />
        <Card.Body>
          <input
            type="range"
            value={currentTime}
            max={duration}
            onChange={handleSeek}
            style={{
              width: '90%',
              height: '8px',
              borderRadius: '5px',
              outline: 'none',
              backgroundColor: '#ddd',
              appearance: 'none',
              marginTop: '10px',
              cursor: 'pointer',
            }}
          />
          <div style={{ fontSize: '0.8em', marginTop: '5px' }}>
            {formatTime(currentTime)} / {formatTime(duration)}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-3">
            <button onClick={playPreviousSong} className="btn btn-light me-2">
              <FaStepBackward style={{ fontSize: '1.5em' }} />
            </button>
            <button onClick={togglePlayPause} className="btn btn-light mx-3">
              {isPlaying ? <FaPause style={{ fontSize: '1.5em' }} /> : <FaPlay style={{ fontSize: '1.5em' }} />}
            </button>
            <button onClick={playNextSong} className="btn btn-light ms-2">
              <FaStepForward style={{ fontSize: '1.5em' }} />
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  </Modal.Body>
</Modal>


    </>
  );
}

export default TrendingNow;
