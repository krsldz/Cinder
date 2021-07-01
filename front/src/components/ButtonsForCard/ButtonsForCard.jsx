import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CardSolo from "../Card/Card";
import "./ButtonsForCard.css";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import TinderCard from "react-tinder-card";
import Loader from "../Loader/Loader";
import Button from "@material-ui/core/Button";
import Comments from "../Comments/Comments";


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
}));

function ButtonsForCard() {
  const loader = useSelector((state) => state.loader);
  const classes = useStyles();

  let allFilms = useSelector((state) => state.films);
  const [tinderFilms, setTinderFilms] = useState(allFilms);

  const [likeEvent, setLikeEvent] = useState([]);
  const [superLikeEvent, setsuperLike] = useState([]);
  const [comments, setComments] = useState(false);
  const [idFilm, setIdFilm] = useState();

  const commentsHandler = (id) => {
    // selectFilm(e);
    setIdFilm(id);
    setComments((prev) => !prev);
  };

  // function selectFilm (e) {
  //   const id = e?.target?.parentElement?.previousElementSibling?.firstElementChild?.id
  //   setIdFilm(id)
  // }
  console.log(idFilm);

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };
  useEffect(() => {}, [allFilms]);

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
        <div className="topSwing">
          <img
            className="swing"
            src="https://img.icons8.com/windows/100/000000/filled-heart.png"
            alt=""
          />
        </div>
        <div className="divWithButtons">
          <div className="divBut">
            <img
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumbs-down.png"
              alt=""
            />
          </div>

          <div className="boxGame">
            {loader ? (
              <Loader />
            ) : allFilms.length !== 0 ? (
              <div className="but">
                {allFilms?.map((film, ind) => (
                  <>
                    <CardSolo
                      setTinderFilms={setTinderFilms}
                      ind={ind}
                      id={film.idKP}
                      setComments={setComments}
                      commentsHandler={commentsHandler}
                    />{" "}
                  </>
                ))}
                {/* <Button size="small" marginRight="10px">
                  Food
                </Button>
                <Button size="small" align="rigth" onClick={commentsHandler}>
                  Комментарии
                </Button> */}
              </div>
            ) : (
              <h1>Ой! Подходящих фильмов нет, пройдите тест еще раз</h1>
            )}
          </div>
          <div className="divBut">
            <img
              //  onClick={likeHandler}
              className="swing"
              src="https://img.icons8.com/ios/100/000000/thumb-up--v1.png"
              alt=""
            />
          </div>
        </div>

        <div className="topSwing">
          <img
            className="swing"
            src="https://img.icons8.com/dotty/100/000000/cinema-.png"
          />
        </div>
        {comments ? <Comments id={idFilm} /> : null}
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
