import { configureStore } from "@reduxjs/toolkit";
import Recentelyplayed from "./slices/Recentelyplayed";

import LikedSongs from './slices/Likedsongs';
import Payments from './slices/Payments'
import SongDetailSlice from "./slices/SongDetailSlice";





const store = configureStore({
    reducer: {
        RecentlyplayedReducer: Recentelyplayed,
       
        LikedsongReducer:LikedSongs,

        PaymentsReducer:Payments,

        songDetailReducer:SongDetailSlice

       
        
    }
})
export default store