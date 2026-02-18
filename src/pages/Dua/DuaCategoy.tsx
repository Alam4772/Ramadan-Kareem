import { useSelector } from "react-redux";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function DuaCategoy() {
  const navigate = useNavigate();

  const categories: Array<any> = useSelector(
    (state: any) => state.dua.categories
  );

  const navigateDuaList = (category: any) => {
    navigate("/dua-list", { state: { category } });
  };

  return (
    <div id="dua-category-page">
      <div className="dua-header">
        <h1>Dua Category</h1>
      </div>
      <div className="category-list">
        {categories.map((category: any, index: number) => {
          return (
            <div
              key={index}
              className="category-item"
              onClick={() => {
                navigateDuaList(category);
              }}
            >
              <h3>{category}</h3>
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
