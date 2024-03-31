import { configureStore } from "@reduxjs/toolkit";
import Recentelyplayed from "./slices/Recentelyplayed";
import TopAlbums from "../pages/TopAlbums";

const store = configureStore({
    reducer: {
        RecentlyplayedReducer: Recentelyplayed,
        // TopAlbumsReducer: TopAlbums
    }
})
export default store