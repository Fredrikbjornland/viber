import React, { useState } from 'react';
import { useNowPlaying } from '../hooks'

//Run: auth-server: node authorization_code/app.js
//client: npm start




const ShowVideos = () => {
    const {nowPlaying, setNowPlaying } = useNowPlaying();
    const [checked, setChecked] = useState(true)
    return (
        <div className="App">
            <div>
                Now Playing: {nowPlaying.name}
            </div>
            <div>
                <img src={nowPlaying.albumArt} style={{ height: 150 }} />
            </div>
        </div>
    );
}


export default ShowVideos;