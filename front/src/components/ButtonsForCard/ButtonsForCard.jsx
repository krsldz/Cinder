import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardSolo from "../Card/Card";
import "./ButtonsForCard.css";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import TinderCard from "react-tinder-card";

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

  let allFilms = useSelector((state) => state.films);

  const [likeEvent, setLikeEvent] = useState([]);
  const [superLikeEvent, setsuperLike] = useState([]);

  const onSwipe = (direction) => {
  console.log('You swiped: ' + direction)
}
useEffect(()=>{
 
},[allFilms])

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  function removeItemOnce(arr, value) {
    let index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  const dislikeHandler = (id) => {
    let dislikeFilm = allFilms.filter((film) => film.id === id);
    allFilms = removeItemOnce(allFilms, dislikeFilm);
  };

  const dontKnowHandler = (id) => {
    let dontKnowFilm = allFilms.filter((film) => film.id === id);
    allFilms = removeItemOnce(allFilms, dontKnowFilm);
    allFilms.push(dontKnowFilm);
  };

  const likeHandler = (id) => {
    let likeFilm = allFilms.filter((film) => film.id == id);
    allFilms = removeItemOnce(allFilms, likeFilm);
    setLikeEvent((prev) => [...prev, likeFilm]);
  };

  const superLikeHandler = (id) => {
    let superLikeFilm = allFilms.filter((film) => film.id == id);
    allFilms = removeItemOnce(allFilms, superLikeFilm);

    setsuperLike((prev) => [...prev, superLikeFilm]);
  };

  return (
    <>
      <div>
        <div className="divWithButtons">
          <div className="divBut">
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumbs-down.png"
              alt=""
            />
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/question-mark--v1.png"
              alt=""
            />
          </div>

          <div className="boxGame">
            {allFilms?.map((film) => (
              <CardSolo id={film.idKP} />
            ))}
          </div>

          <div className="divBut">
            <img
              //  onClick={likeHandler}

              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumb-up--v1.png"
              alt=""
            />
            <img
              className="swing"
              src="https://img.icons8.com/windows/100/000000/filled-heart.png"
              alt=""
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
    </>
  );
}

export default ButtonsForCard;
