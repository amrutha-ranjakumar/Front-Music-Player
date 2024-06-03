import logo from './logo.svg';
import './App.css';
import Sign1 from './pages/Sign1';
import Home from './pages/Home'
import TrendingNow from './pages/TrendingNow'
import OldSongs from './pages/OldSongs'
import NewSongs from './pages/NewSongs'
import { Route, Routes } from 'react-router-dom';
import RecentlyPlayed from './pages/RecentlyPlayed';
import Payments from './pages/Payments';
import LikedSongs from './pages/LikedSongs';
import Landing from './pages/Landing';
import Profile from './pages/Profile';
import SongDetails from './pages/SongDetails';
import Download from './pages/Download';



function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/sign' element={<Sign1 />} />
        <Route path='/register' element={<Sign1 register={"register"} />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='home/songdetails' element={<SongDetails />} />
        <Route path='/home' element={<Home />} />
        <Route path='/trendingnow' element={<TrendingNow />} />
        <Route path='/oldsongs' element={<OldSongs />} />
        <Route path='/newsongs' element={<NewSongs />} />
        <Route path='/likedsongs' element={<LikedSongs />} />
        <Route path='/recentlyplayed' element={<RecentlyPlayed />} />
        <Route path='/home/songdetails/payments' element={<Payments />} />
        <Route path='/download' element={<Download />} />
      </Routes>
    </div>

  );
}

export default App;
