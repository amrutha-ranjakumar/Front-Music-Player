import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AllMusicAPI } from '../services/allAPI';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from 'react-icons/fa';
import Header from '../components/Header';
import trendingnow from '../assets/trending-now-trending-now.webp';
import { BASE_URL } from '../services/baseurl';
import Footer1 from '../components/Footer1'

function TrendingNow() {
  const [searchKey, setSearchKey] = useState('');
  const [allMusic, setAllMusic] = useState([]);
  const RecentlyArray = useSelector((state) => state.RecentlyplayedReducer);
  const [show, setShow] = useState(false);
  const [audio] = useState(new Audio());
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

  useEffect(() => {
    if (music.audio) {
      audio.src = `${BASE_URL}/uploads/${music.audio}`;
    }
  }, [music]);

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

 

  return (
    <>
      <Header />
      <div className="mb-5 p-5"></div>
      <div className="mb-5 mt-5 p-5">
        <Link to="/home" className="text-white fs-5 fw-bold ms-md-5 ms-3">
          <i className="fa-solid fa-arrow-left me-2"></i> Back To Home
        </Link>
        <Container className="mb-5 d-flex flex-column align-items-center">
          <Row className="justify-content-center">
            <Col xs={12} md={4} className="text-center mt-5 p-2">
              <img className="img-fluid" src={trendingnow} alt="Trending Now" />
            </Col>
            <Col xs={12} md={5} className="text-center " style={{marginTop:"200px"}}>
              <h1>Trending Now</h1>
              <button className="btn btn-danger mt-3">
                <i className="fa-solid fa-play me-2"></i> Play Songs
              </button>
            </Col>
          </Row>
        </Container>

        <Container className="table-responsive">
        



        </Container>


        <div className="table-responsive">
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
            {allMusic?.length > 0 ? (
              allMusic.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.title}</td>
                  <td><img src={`${BASE_URL}/uploads/${item.image}`} width={'100px'} height={'100px'} alt="" onClick={() => handleShow(item)}  /></td>
                  <td>{item.audio}</td>
                  <td>4:74</td>
                  <td>
                    <button className="btn btn-primary" >
                      <i className="fa-solid fa-download"></i> Download
                    </button>
                
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
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{music.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <Card className="mx-auto" style={{ width: '100%', maxWidth: '400px', padding: '10px', boxShadow: '0 4px 8px 2px rgba(0, 0, 0, 0.2)' }}>
              <Card.Img variant="top" src={`${BASE_URL}/uploads/${music.image}`} alt="Album Cover" className="img-fluid mb-3" style={{ maxHeight: '350px', objectFit: 'cover' }} />
              <Card.Body>
                <input
                  type="range"
                  value={currentTime}
                  max={duration}
                  onChange={handleSeek}
                  className="w-100"
                />
                <div className="mt-2">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button  className="btn btn-light me-2">
                    <FaStepBackward className="fs-4" />
                  </button>
                  <button onClick={togglePlayPause} className="btn btn-light mx-3">
                    {isPlaying ? <FaPause className="fs-4" /> : <FaPlay className="fs-4" />}
                  </button>
                  <button  className="btn btn-light ms-2">
                    <FaStepForward className="fs-4" />
                  </button>
                </div>
              </Card.Body>
            </Card>
          </div>
        </Modal.Body>
      </Modal>
      <Footer1 />
    </>
  );
}

export default TrendingNow;
