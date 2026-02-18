import "./style.scss";
import { useNavigate } from "react-router-dom";
import Time from "../../components/Time/Time";
import Date from "../../components/Date/Date";
import RamadanContent from "../../components/RamadanContent/RamadanContent";

export interface Props {}

export default function Home() {
  const navigate = useNavigate();

  const handleMenuItemClick = (path: string) => {
    navigate(path);
  };

  return (
    <div id="home-page">
      <div className="home-page-container">
        <div className="home-page-content">
          <div className="heading">
            <h2 className="text-uppercase">Ramadan</h2>
            <h2>2026</h2>
            <h3>
              <Date />
            </h3>
            <h3>
              <Time />
            </h3>
            <RamadanContent />
          </div>
          <div className="menu">
            <div
              className="menu-item"
              onClick={() => {
                handleMenuItemClick("timetable");
              }}
            >
              <img src="images/menu/calendar.png" alt="" />
              <h4>TimeTable</h4>
            </div>
            <div
              className="menu-item"
              onClick={() => {
                handleMenuItemClick("dua-category");
              }}
            >
              <img src="images/menu/dua.png" alt="" />
              <h4>Dua</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
