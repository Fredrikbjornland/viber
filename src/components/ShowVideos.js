import React, { useState} from 'react';
import { useNowPlaying } from './../hooks/useNowPlaying'
import { YoutubeViewer } from './YoutubeViewer'
import { SpotifyViewer } from './SpotifyViewer'
import youtube from "../useYoutubeApi";

const API_KEY = 'AIzaSyDkq12vVI56WYecWm4OXRgPE1jID-QeqHo'

export const ShowVideos = () => {
    const [ video, setVideo ] = useState(null)
    const { nowPlaying} = useNowPlaying();
    
    async function testing(songName) {
      const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          key: API_KEY,
          q: songName,
        }
      });
      setVideo(videos[0]);
    }
    if (video == null && nowPlaying.name !== 'Need login'){
      testing(nowPlaying.name + " " + nowPlaying.artist)
    }
    return (
        <div className="showVideos">
            <SpotifyViewer nowPlaying={nowPlaying}/>
            <YoutubeViewer video={video} />
            <button
                type="submit"
                className="testButton"
                onClick={()=>testing(nowPlaying.name + " " + nowPlaying.artist)}
            >
                Submit
            </button>
        </div>
    );
    
}

