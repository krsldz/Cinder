import React, { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useSelector, useDispatch } from "react-redux";
import "./Card.css";
const useStyles = makeStyles({
  border: {
    border: "1px solid black",
    color: "black;",
    marginTop: "2px",
    padding: "4px",
  },
});

export default function CardSolo({id}) {
  const classes = useStyles();
  const [films, setFilms] = useState([]);
  let movies= useSelector(state=>state.films);
  console.log(movies);
  console.log(id)
  useEffect(()=>{
    axios.get('http://localhost:8080/api/v1/compilation').then(res=>setFilms(res.data))
  },[]) 




  const [infoAboutMovie, setInfoAboutMovie] = useState({})
  const movieInfo = (id) => {
    fetch(`https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`)
    .then(res => res.json()).then(data => setInfoAboutMovie(data))
    //const currMovie = response.json()
    //return currMovie
  }
 useEffect(() => {
  movieInfo(id)
 }, [])
 


  return (
    <div className="card">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="fucking card"
            height="100%"
            image={infoAboutMovie?.poster}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              className={classes.text}
              component="h2"
            >
              {infoAboutMovie?.title} 
            </Typography>
            <Typography variant="body2" className={classes.text} component="p">
             {infoAboutMovie?.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" className={classes.text}>
            Трейлер
          </Button>
          <Button size="small" align="rigth" className={classes.text}>
            Комментарии
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
