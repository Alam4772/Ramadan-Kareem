import "./style.scss";
import { useLocation } from "react-router-dom";

export default function Dua() {
  const location = useLocation();

  const dua = location.state.dua;

  console.log(dua);

  return (
    <div id="dua-page">
      <div className="header">
        <h2>{dua.dua_title}</h2>
      </div>
      <div className="content">
        <p>{dua.dua_arabic}</p>
        <p>{dua.dua_transliteration}</p>
        <p>{dua.english_translation}</p>
        <p>{dua.urdu_translation}</p>
      </div>
    </div>
  );
}
