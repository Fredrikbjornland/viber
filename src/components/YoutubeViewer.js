import React from 'react';
import YouTube from 'react-youtube';

export const YoutubeViewer = props => {
  let timer = Math.floor(props.timer / 1000) + 2;
  
// detect enter or exit fullscreen mode
document.addEventListener('webkitfullscreenchange', fullscreenChange);
document.addEventListener('mozfullscreenchange', fullscreenChange);
document.addEventListener('fullscreenchange', fullscreenChange);
document.addEventListener('MSFullscreenChange', fullscreenChange);

function fullscreen() {
  // check if fullscreen mode is available
  if (document.fullscreenEnabled || 
    document.webkitFullscreenEnabled || 
    document.mozFullScreenEnabled ||
    document.msFullscreenEnabled) {
    
    // which element will be fullscreen
    var iframe = document.querySelector('#widget2');
    console.log(iframe)
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    }
  }
  else {
    document.querySelector('.error').innerHTML = 'Your browser is not supported';
  }
}

function fullscreenChange() {
  if (document.fullscreenEnabled ||
       document.webkitIsFullScreen || 
       document.mozFullScreen ||
       document.msFullscreenElement) {
    console.log('enter fullscreen');
  }
  else {
    console.log('exit fullscreen');
  }
  // force to reload iframe once to prevent the iframe source didn't care about trying to resize the window
  // comment this line and you will see
  // var iframe = document.querySelector('widget2');
  // iframe.src = iframe.src;
}
  const videoOnReady = (event) => {
    event.target.mute(true);
    event.target.playVideo();
    // fullscreen()
  }

  if (!props.video) {
    return (<div className="youtubeViewer">Loading...</div>)
  }
  const opts = {
    height: window.innerHeight,
    width: window.innerWidth,
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      start: timer
    }
  };
  return (
    <div className="youtubeViewer">
      <YouTube
        videoId={props.video.id.videoId}
        opts={opts}
        onReady={videoOnReady}
      />
      {/* <button onClick={fullscreen}>Click me to fullscreen the iframe</button> */}
    </div>
  );
}