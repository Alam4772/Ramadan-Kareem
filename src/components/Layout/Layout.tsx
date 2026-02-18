import { Outlet } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../shared/store";
import { requestPermission } from "../../shared/store/notificationSlice";

export default function Layout() {
  const dispatch = useDispatch();

  const permission: string = useSelector(
    (state: RootState) => state.notification
  );

  if (permission === "denied" || permission === "default") {
    dispatch(requestPermission());
  }

  return (
    <div id="layout">
      <Outlet />
    </div>
  );
}
