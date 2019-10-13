import React, { useState} from 'react';
import { useNowPlaying } from '../hooks'

export const TestShowVideos = () => {
    const {nowPlaying, setNowPLaying } = useNowPlaying();
    return(
        <div className="App">
                <div>
                    Now Playing: {nowPlaying.name}
                </div>
                <div>
                    <img src={nowPlaying.albumArt} style={{ height: 150 }} />
                </div>
            </div>
    )
}