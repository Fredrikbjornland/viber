import { useState} from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const useNowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState({
        name: 'Need login',
        artist: 'use',
        albumArt: '',
        timeRemaining: 0,
        timeProgress: 0
    });

    const getHashParams = () => {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g,
            q = window.location.hash.substring(1);
        e = r.exec(q)
        while (e) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
            e = r.exec(q);
        }
        return hashParams;
    }
    const params = getHashParams();
    const token = params.access_token;
    if (token) {
        spotifyApi.setAccessToken(token);
    }
    

    spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
            if (response.item && response.item.name !== nowPlaying.name) {
                setNowPlaying({
                    name: response.item.name,
                    artist: response.item.artists[0].name,
                    albumArt: response.item.album.images[0].url,
                    timeRemaining: response.item.duration_ms - response.progress_ms,
                    timeProgress: response.progress_ms
                });
            };
        })
    return { nowPlaying, setNowPlaying };
}


