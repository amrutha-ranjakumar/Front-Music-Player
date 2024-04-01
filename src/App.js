import logo from './logo.svg';
import './App.css';
import Header from './components/Header';

import Sign1 from './pages/Sign1';
import Home from  './pages/Home'
import TrendingNow from './pages/TrendingNow'
import OldSongs from './pages/OldSongs'
import NewSongs from './pages/NewSongs'
import TopAlbums from './pages/TopAlbums'
import { Route, Routes } from 'react-router-dom';

import RecentlyPlayed from './pages/RecentlyPlayed';
import Center from './pages/Center';
import { useState } from 'react';



function App() {



    
  return (
    <div>

    
 



 <Routes>
 <Route path='/' element={<Center/> }/>
<Route path='/sign' element={ <Sign1/>}/>
<Route path='/register' element={ <Sign1 register={"register"}/>}/>

<Route path='/home' element={  <Home/>}/>
<Route path='/trendingnow' element={ <TrendingNow/>}/>
<Route path='/oldsongs' element={<OldSongs/>}/>
<Route path='/newsongs' element={<NewSongs/>}/>
<Route path='/topalbums' element={<TopAlbums/>}/>
<Route path='/recentlyplayed' element={ <RecentlyPlayed/>}/>


</Routes>
    

    </div>
    
  );
}

export default App;
