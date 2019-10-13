import { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';



//Run: auth-server: node authorization_code/app.js
//client: npm start


const spotifyApi = new SpotifyWebApi();

export const useNowPlaying = () => {
    const [nowPlaying, setNowPlaying] = useState({
        name: 'Not checked',
        albumArt: ''
    })
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

    useEffect(() => {
        spotifyApi.getMyCurrentPlaybackState()
            .then((response) => {
                setNowPlaying({
                    name: response.item.name,
                    albumArt: response.item.album.images[0].url,
                })
            })
    }, [nowPlaying])


    return { nowPlaying, setNowPlaying };
}
