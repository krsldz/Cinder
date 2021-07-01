import React, { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import {deleteSuperLikedFilm} from '../../redux/actions/userSuperlikesCreator'
import {initViewedFilms} from '../../redux/actions/userViewedFilm';
import Button from '@material-ui/core/Button';

import "./Scroll.css";

export default function ElementSuperLike({id}){

  const [infoAboutFilm, setInfoAboutFilm] = useState({});
  const superLikes = useSelector(state=> state.superLikes);
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
 }, [])
 console.log('--->', infoAboutFilm);

 const changer =() =>{

  let superLike = superLikes?.find((film)=> film.movie?.find((movies)=> id== movies.idKP))
 console.log(superLike);
  dispatch(deleteSuperLikedFilm(superLike))
  dispatch(initViewedFilms())

  

  
  
 

  

}

 return(
   

  <li className="uk-transition-toggle" tabindex="0">
    
  <img src={infoAboutFilm.poster} alt="" />
  <div className="uk-position-center uk-panel">
    <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
    <p>Рейтинг <br/>
    {infoAboutFilm.rating_kinopoisk}
    <Button onClick={changer}> Добавить в просмотренное </Button>
    <Button>Комментарии</Button>
      </p>
    </div>
  </div>
</li>
 )
}
