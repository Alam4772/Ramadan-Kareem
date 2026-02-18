import Layout from "./components/Layout/Layout";
import Dua from "./pages/Dua/Dua";
import DuaCategoy from "./pages/Dua/DuaCategoy";
import DuaList from "./pages/Dua/DuaList";
import Home from "./pages/Home/Home";
import TimeTable from "./pages/TimeTable/TimeTable";

const routes = [
  {
    path: "",
    component: <Layout />,
    children: [
      {
        path: "/",
        component: <Home />,
      },
      {
        path: "/timetable",
        component: <TimeTable />,
      },
      {
        path: "/dua-category",
        component: <DuaCategoy />,
      },
      {
        path: "/dua-list",
        component: <DuaList />,
      },
      {
        path: "/dua",
        component: <Dua />,
      },
    ],
  },
];

export default routes;
