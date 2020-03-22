import React, { useState, useEffect } from 'react';
import { useNowPlaying } from './../hooks/useNowPlaying'
import { YoutubeViewer } from './YoutubeViewer'
// import { SpotifyViewer } from './SpotifyViewer'
import { getNowPlaying } from "../APIs/getNowPlaying"
import { makeStyles } from '@material-ui/core/styles';
import youtube from "../APIs/useYoutubeApi"
import Grid from '@material-ui/core/Grid';
import useInterval from '../hooks/useInterval';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
// import { Icon} from '@iconify/react';
// import spotifyIcon from '@iconify/icons-mdi/spotify';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    color: 'white',
    height: '100%',
  },
  paper: {
    maxWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
    backgroundColor: 'transparent',
    color: 'white',
  },
}))
const API_KEY = 'AIzaSyCDkrY9Eizx0hsvwpSZvHagR4NawCMtLWo'

export const ShowVideos = () => {
  const classes = useStyles();
  const [video, setVideo] = useState(null)
  const { nowPlaying, setNowPlaying } = useNowPlaying();

  const checker = nowPlaying.name === 'Need login'
  useInterval(() => {
    updateSong()
  }, 6000)

  useEffect(() => {
    if (nowPlaying.timeRemaining !== 0) {
      setTimeout(() => updateSong(), nowPlaying.timeRemaining + 2000)
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
  const updateSong = () => {
    getNowPlaying().then(value => {
      if (value.name !== nowPlaying.name && nowPlaying.name !== 'Need login') {
        setNowPlaying(value)
      }
    })
  }

  return (
    <Grid container alignItems="center" className={classes.root}>
      {!checker &&
        <Grid container
          direction="column"
          justify="space-between"
          alignItems="center">
          {/* <Grid>
            <SpotifyViewer nowPlaying={nowPlaying} />
          </Grid> */}
          <Grid>
            <YoutubeViewer video={video} timer={nowPlaying.timeProgress} />
          </Grid>
        </Grid>}
      {checker &&
        <Grid 
           container
          >
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" alignItems="center" spacing={2}>
              <Grid item>
                {/* <Icon icon={spotifyIcon} height={50} color={'#1DB954'} /> */}
              </Grid>
              <Grid item xs>
                <Typography variant="h3">Play a song on spotify to see the visuals</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      }
    </Grid >
  );

}

