import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

export const  getNowPlaying = async () => {
    let nowPlaying2 = {
        name: 'Need login',
        artist: 'get',
        albumArt: '',
        timeRemaining: 0,
        timeProgress: 0
    };

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
    

    await spotifyApi.getMyCurrentPlaybackState()
        .then((response) => {
            if (response.item) {
                if (response.item.name !== nowPlaying2.name) {
                    nowPlaying2 = {
                        name: response.item.name,
                        artist: response.item.artists[0].name,
                        albumArt: response.item.album.images[0].url,
                        timeRemaining: response.item.duration_ms - response.progress_ms,
                        timeProgress: response.progress_ms
                    };
                };
            };
        });
    return nowPlaying2;
}


