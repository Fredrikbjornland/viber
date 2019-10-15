import React from 'react';
import YouTube from 'react-youtube';

export const YoutubeViewer = ({ video }) => {
  const VideoOnReady = (event) => {
    console.log(event.target)
    event.target.pauseVideo();
    event.target.mute(true);
    //event.target.playVideoAt(x)
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