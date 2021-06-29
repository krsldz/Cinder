import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardSolo from "../Card/Card";
import "./ButtonsForCard.css";
import SvgIconsColor from "../FooterIcons/FooterIcons";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    background: `url(${"/front/src/images/22222.jpeg"})`,
    backgroundColor: "hotpink",
  },
}));

function ButtonsForCard() {
  const classes = useStyles();
  
  let films = useSelector(state => state.films)

  const likeFilms = useSelector(state => state.likefilms)
  const superLikeFilms = useSelector(state => state.superlikefilms)
  const allFilms = useSelector(state => state.allFilms)

  const [likeEvent, setLikeEvent] = useState(likeFilms)
  // const [dislikeEvent, setDislikeEvent] = useState('')
  // const [dontKnowEvent, setKnowEvent] = useState('')
  const [superLikeEvent, setSuperLike] = useState(superLikeFilms)

  const dislikeHandler = (id) => {
    const currFilm = allFilms.filter((film) => film.id === id)
    const indexCurrFilm = allFilms.indexOf(currFilm);
    if (indexCurrFilm > -1) {
      allFilms.splice(indexCurrFilm, 1);
    }
  }

  const dontKnowHandler = (id) => {
    const currFilm = allFilms.filter((film) => film.id === id)
    const indexCurrFilm = allFilms.indexOf(currFilm);
    if (indexCurrFilm > -1) {
      allFilms.splice(indexCurrFilm, 1).push(indexCurrFilm);
    }
  }

  const likeHandler = (id) => {
    const currFilm = allFilms.filter((film) => film.id === id)
    setLikeEvent(prev => [...prev, currFilm])
  }

  const superLikeHandler = (id) => {
    const currFilm = allFilms.filter((film) => film.id === id)
    setSuperLike(currFilm)
  }

  return (
    <>
      <div>
        <div className="divWithButtons">
          <div className="divBut">
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumbs-down.png" alt=""
            />
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/question-mark--v1.png" alt=""
            />
          </div>

          <div className="boxGame">
            <CardSolo />
          </div>

          <div className="divBut">
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumb-up--v1.png" alt=""
            />
            <img
              className="swing"
              src="https://img.icons8.com/windows/100/000000/filled-heart.png" alt=""
            />
          </div>
        </div>
        <hr />
        <footer>
          <SvgIconsColor />
          <div>
            <a href="https://icons8.com/icon/aId5rVASLwDE/сердечко-с-заливкой">
              icon by Icons8
            </a>
          </div>
        </footer>
      </div>
      <div><h3>Подборка для юзера:</h3> {films?.map(film => <CardSolo id={film.idKP} />)}</div>
    </>
  );
}

export default ButtonsForCard;
