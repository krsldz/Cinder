import Zak from "../../images/Zak.jpeg";
import {initLikedFilms} from '../../redux/actions/userLikesFilmCreator';
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from 'react';

export default function ScrollBar() {

  
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="sets: false"
    >
      <ul className="uk-slider-items  uk-child-width-1-4@m ">
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={Zak} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
              1
            </div>
          </div>
        </li>
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
