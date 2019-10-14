import React from 'react';

export const SpotifyViewer = ({ nowPlaying }) => {

    return (
        <div className="spotifyViewer">
            <h1>
                Now Playing: {nowPlaying.name}
            </h1>
            <div className="coverImage">
                <img
                    src={nowPlaying.albumArt}
                    style={{ height: 150 }}
                    alt={nowPlaying.name}
                />
            </div>
        </div>
    );
};