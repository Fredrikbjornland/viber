import React from 'react';
import YouTube from 'react-youtube';

export const YoutubeViewer = props => {
  let timer = Math.floor(props.timer / 1000) + 2
  const VideoOnReady = (event) => {
    event.target.mute(true);
  }
  if (!props.video) {
    return (<div className="youtubeViewer">Loading...</div>)
  }

  const opts = {
    height: '390',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: timer
    }
  };
  const videoOnReady = (e) => {
    console.log(e.target)
    e.target.playVideo()
  }
  return (
    <div className="youtubeViewer">
      <YouTube
        videoId={props.video.id.videoId}
        opts={opts}
        onReady={videoOnReady}
      />
    </div>
  );
}