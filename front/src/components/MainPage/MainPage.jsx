import "./MainPage.css";
import CardForMain from "../CardForMain/CardForMain";
import CardSolo from "../Card/Card";
import SvgIconsColor from "../FooterIcons/FooterIcons";
import SpringModal from '../Questionnaire/Questionnaire'
import ShareButton from "../ShareButton/ShareButton";
import ButtonsForCard from "../ButtonsForCard/ButtonsForCard"

export default function MainPage() {
  return (
    <div>
      <div className="wrapper">
        <div className="box box1" id="1">
          <CardForMain />
          <span>Для просмотра с половинкой</span>
        </div>
        <div className="box box2" id="2">
          <CardForMain />
          <span>Для просмотра с мамой</span>
        </div>
        <div className="box box3" id="3">
          <CardForMain />
          <span>Для просмотра с семьей</span>
        </div>
      </div>
      <div className="buttonDiv">
        <button className="animated-button"> ВЫБРАТЬ ФИЛЬМ</button>
      </div>
        <hr />
        <ShareButton/>
      <footer>
        <SvgIconsColor />
      </footer>
      <div>
        <CardSolo />
      </div>
      <div>
        <SpringModal />
      </div>
    </div>
  );
}
