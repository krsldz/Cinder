import React from 'react';
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import {Box, Card, CardMedia} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import CardSolo from "../Card/Card"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


function ButtonsForCard () {

const classes = useStyles()

// const allFilms = useSelector(state => state.films)

// const [likeEvent, setLikeEvent] = useState('')
// const [dislikeEvent, setDislikeEvent] = useState('')
// const [dontKnowEvent, setKnowEvent] = useState('')
// const [superLikeEvent, setsuperLike] = useState('')

// const dislikeHandler = (id) => {
  
// }

// const dontKnowHandler = (id) => {
  
// }

// const likeHandler = (id) => {
  
// }

// const superLikeHandler = (id) => {
  
// }

return (
  <>
  <div className={classes.root}>
      
      <Grid container spacing={3}>
        <Grid item xs>
          <Paper className={classes.paper}>
          <Button variant="contained">Dislike</Button>
          <br/>
          <Button variant="contained" color="primary">I don't know</Button>
          </Paper>
         
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <CardSolo/>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}> <Button variant="contained" color="primary">
            Like</Button>
          <br/>
          <Button variant="contained" color="secondary">SuperLike</Button>
          </Paper>
         
        </Grid>
      </Grid>
    </div>
  </>
  
)
}

export default ButtonsForCard
