import React from 'react';
import YouTube from 'react-youtube';

export const YoutubeViewer = ({video}) => {
    console.log("test")
    const VideoOnReady = (event) => {
        // event.target.playVideo() when ready
        console.log(event.target)
        event.target.pauseVideo();
      }
    
    if (!video) {
        return (<div className="youtubeViewer">Loading...</div>)
    }
    
    const opts = {
        height: '390',
        width: '640',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1
        }
      };

    return (
        <YouTube
          videoId={video.id.videoId}
          opts={opts}
          onReady={VideoOnReady}
        />
      );
}