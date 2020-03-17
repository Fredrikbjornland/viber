import React, { useState, useEffect } from 'react';
import { useNowPlaying } from './../hooks/useNowPlaying'
import { YoutubeViewer } from './YoutubeViewer'
import { SpotifyViewer } from './SpotifyViewer'
import { getNowPlaying } from "../APIs/getNowPlaying"
import { makeStyles } from '@material-ui/core/styles';
import youtube from "../APIs/useYoutubeApi"
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    height: '100%',
  }
}))
const API_KEY = 'AIzaSyBA3yokQH-3sjJcR9ZYfeCYss9MuER9c3A'

export const ShowVideos = () => {
  const [video, setVideo] = useState(null)
  const { nowPlaying, setNowPlaying } = useNowPlaying();
  const classes = useStyles();
  let playing = {
    name: 'Need login',
    artist: '',
    albumArt: '',
    timeRemaining: 0,
    timeProgress: 0
  }

  const checker = nowPlaying.name === 'Need login'

  useEffect(() => {
    if (nowPlaying.timeRemaining !== 0) {
      setTimeout(() => updateVideo(), nowPlaying.timeRemaining + 2000)
    }
    if (!checker) {
      mountVideo()
    }
  }, [nowPlaying])

  const mountVideo = async () => {
    const { data: { items: videos } } = await youtube.get("search", {
      params: {
        part: "snippet",
        key: API_KEY,
        q: nowPlaying.name + " " + nowPlaying.artist + "music video",
      }
    });
    setVideo(videos[0]);
  }
  const updateVideo = () => {
    getNowPlaying().then(value => playing = value)
    console.log(playing)
    setNowPlaying(playing)
  }
  return (
    <Grid className={classes.root}>
      {!checker &&
        <Grid container
          direction="column"
          justify="space-between"
          alignItems="center">
          <Grid>
            <SpotifyViewer nowPlaying={nowPlaying} />
          </Grid>
          <Grid>
            <YoutubeViewer video={video} timer={nowPlaying.timeProgress} />
          </Grid>
        </Grid>}
    </Grid>
  );

}

