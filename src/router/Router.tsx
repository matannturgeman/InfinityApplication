import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import NavBar from "../components/MainLayout/NavBar/NavBar";
import views from "../data/views.json";
import { View } from "../types/Views/views.types";
import { RenderViewContainer } from "../views/Views";

const RouteLoader = () => {
  const { routeValue = "home" } = useParams();
  const view = views.find((v) => v.value === routeValue) as View;
  return <RenderViewContainer view={view} />;
};

const AppRouter = () => {
  return (
    <Suspense>
      <Router>
        <div>
          <NavBar views={views} />

          <Routes>
            <Route path="/" Component={RouteLoader} index />
            <Route path="/:routeValue" Component={RouteLoader} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
