import quin from "../../images/quin.jpeg";


export default function test() {
  return(
    <li className="uk-transition-toggle" tabindex="0">
    <img src={quin} alt="" />
    <div className="uk-position-center uk-panel">
      <div className="uk-h1 uk-transition-slide-bottom-small textScroll">
      Для просмотра со своей половинкой
      </div>
    </div>
  </li>
  )
}
