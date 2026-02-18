import { Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router";
import routes from "./routes";

// Recursive function to render routes and nested routes
const renderRoutes = (routes: any) => {
  return routes.map((route: any, index: number) => {
    if (route.children) {
      // If there are nested routes, render them recursively inside Routes
      return (
        <Route key={index} path={route.path} element={route.component}>
          {renderRoutes(route.children)}
        </Route>
      );
    }

    // Render the route if there are no nested routes
    return <Route key={index} path={route.path} element={route.component} />;
  });
};

function Router() {
  return (
    <HashRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </HashRouter>
  );
}

export default Router;
