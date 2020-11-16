import { combineReducers } from "redux";
//import { selectSong } from "../actions";

const songsReducer =()=>{
    return [
        {title : 'noScrubs', duration:'4:05'},
        {title : 'macarena', duration:'2:05'},
        {title : 'all start', duration:'3:15'},
        {title : 'I Want it', duration:'1:05'}
    ];
};

const selectedSongReducer = (selectedSong = null, action)=>{
    if(selectedSong===undefined){
        selectedSong = null;
    }

    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

//selectedSongReducer(undefined,{type:"fdgffhg"});

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});