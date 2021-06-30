import quin from "../../images/quin.jpeg";
import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';

export default function ScrollBar2({id}) {

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  const likes = useSelector(state=> state.likes);

  const movieInfo = (id) => {
    fetch(
      `https://api.kinopoisk.cloud/movies/${id}/token/efcf5da3f88fef737921b0cd9182b8d6`
    )
      .then((res) => res.json())
      .then((data) => setInfoAboutFilm(data));
  }
 
  useEffect(() => {
  movieInfo(id)
 }, [])




  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="sets: false"
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light">
       
      {likes.map((film)=>
        <li className="uk-transition-toggle" tabindex="0">
        <img src={film.infoAboutFilm?.poster} alt="" />
        <div className="uk-position-center uk-panel">
          <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
          <p>Рейтинг <br/>
          {film.infoAboutFilm?.rating_kinopoisk}
            </p>
          </div>
        </div>
      </li>)}
        
        
       
       
        
       
      </ul>
      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
        uk-icon="icon: chevron-left; ratio: 3"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
        uk-icon="icon: chevron-right; ratio: 3"
      ></a>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
  );
}
