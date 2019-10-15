import React, { useState, useEffect} from 'react';
import { useNowPlaying } from './../hooks/useNowPlaying'
import { YoutubeViewer } from './YoutubeViewer'
import { SpotifyViewer } from './SpotifyViewer'
import youtube from "../useYoutubeApi";

const API_KEY = 'AIzaSyDkq12vVI56WYecWm4OXRgPE1jID-QeqHo'

export const ShowVideos = () => {
    const [ video, setVideo ] = useState(null)
    const { nowPlaying } = useNowPlaying();
    const [, setForce] = useState()
    const timer = nowPlaying.durationMs -nowPlaying.progressMs;
    
    useEffect(() => {
      console.log(timer)
      setTimeout(()=> console.log("yeet"), timer)
      setTimeout(()=> mountVideo(), timer)
    },[nowPlaying]);

    async function mountVideo() {
      const { data: { items: videos } } = await youtube.get("search", {
        params: {
          part: "snippet",
          key: API_KEY,
          q: nowPlaying.name + " " + nowPlaying.artist,
        }
      });
      setVideo(videos[0]);
    }

    if (video == null && nowPlaying.name !== 'Need login'){
      mountVideo(nowPlaying.name + " " + nowPlaying.artist)
    }

    return (
        <div className="showVideos">
            <SpotifyViewer nowPlaying={nowPlaying}/>
            <YoutubeViewer video={video} />
            <button
                type="submit"
                className="testButton"
                onClick={()=>mountVideo(nowPlaying.name + " " + nowPlaying.artist)}
            >
                Submit
            </button>
        </div>
    );
    
}

