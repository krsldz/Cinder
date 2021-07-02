import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Comments from "../Comments/Comments";
import {initViewedFilms} from '../../redux/actions/userViewedFilm';

import Button from '@material-ui/core/Button';

import "./Scroll.css";

export default function ElementSuperLike({ id, commentsHandler}) {

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  let superLikes = useSelector(state => state.superLikes);
  const dispatch = useDispatch();


  const movieInfo = (id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutFilm(data));
  }

  useEffect(() => {
    movieInfo(id)
    dispatch(initViewedFilms())
  }, [])
  console.log('--->', infoAboutFilm);

  // const commentsHandler = (id) => {
  //   // selectFilm(e);
  //   // setIdFilm(id)
  //   setComments(prev => !prev)
  // }

  return (
    <>

      <li className="uk-transition-toggle" tabindex="0">
        {/* <p>123</p> */}
        <img src={infoAboutFilm.poster} alt="" />
        <div className="uk-position-center uk-panel">
          <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
            <p>Рейтинг <br />
              {infoAboutFilm.rating_kinopoisk}

              <Button onClick={() => commentsHandler(id)}>Комментарии</Button>

            </p>
          </div>
        </div>
      </li>
      <div>
      </div>
    </>
  )
}
