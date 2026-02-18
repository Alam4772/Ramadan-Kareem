import "./style.scss";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export default function DuaList() {
  const location = useLocation();
  const navigate = useNavigate();

  const category = location.state.category;

  const records: Array<any> = useSelector((state: any) =>
    state.dua.duaList(category)
  );

  const navigateToDua = (dua: any) => {
    navigate("/dua", { state: { dua } });
  };

  return (
    <div id="dua-list-page">
      <div className="header">
        <h1>{`Dua For ${category}`}</h1>
      </div>
      <div className="dua-list">
        {records.map((record: any, index: number) => {
          return (
            <div
              key={index}
              className="dua-item"
              onClick={() => {
                navigateToDua(record);
              }}
            >
              <h3>{record.dua_title}</h3>
              <span>
                <i className="fa-solid fa-caret-right"></i>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
