import quin from "../../images/quin.jpeg";

export default function ScrollBar2() {
  return (
    <div
      className="uk-position-relative uk-visible-toggle uk-light"
      tabindex="-1"
      uk-slider="sets: true"
    >
      <ul className="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-light">
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
        <li className="uk-transition-toggle" tabindex="0">
          <img src={quin} alt="" />
          <div className="uk-position-center uk-panel">
            <div className="uk-h1 uk-transition-slide-bottom-small">1</div>
          </div>
        </li>
      </ul>
      <a
        className="uk-position-center-left uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-previous
        uk-slider-item="previous"
        uk-icon="icon: chevron-left; ratio: 2"
      ></a>
      <a
        className="uk-position-center-right uk-position-small uk-hidden-hover"
        href="#"
        uk-slidenav-next
        uk-slider-item="next"
        uk-icon="icon: chevron-right; ratio: 2"
      ></a>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
    </div>
  );
}
