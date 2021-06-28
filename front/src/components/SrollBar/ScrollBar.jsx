export default function ScrollBar() {
  return (
    <div>
      <div
        class="uk-position-relative uk-visible-toggle uk-light"
        tabindex="-1"
        uk-slider="sets: true"
      >
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@m">
          <li>
            <img src="" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">1</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider2.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">2</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider3.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">3</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider4.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">4</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider5.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">5</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider1.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">6</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider2.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">7</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider3.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">8</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider4.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">9</div>
            </div>
          </li>
          <li>
            <img src="/demo/img/slider5.jpg" alt="" />
            <div class="uk-position-center uk-panel">
              <div class="uk-h1">10</div>
            </div>
          </li>
        </ul>
        <a
          class="uk-position-center-left uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-previous
          uk-slider-item="previous"
        ></a>
        <a
          class="uk-position-center-right uk-position-small uk-hidden-hover"
          href="#"
          uk-slidenav-next
          uk-slider-item="next"
        ></a>
      </div>
    </div>
  );
}
