import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import NavBar from "../components/MainLayout/NavBar/NavBar";
import { View } from "../types/Views/views.types";
import { RenderViewContainer } from "../views/Views";
import { VIEWS } from "../constants/views.constants";
import { getViews } from "../services/views.service";
import { useQuery } from "@tanstack/react-query";

const RouteLoader = ({ views }) => {
  const { routeValue = VIEWS.home } = useParams();

  if (routeValue === VIEWS.home) {
    return (
      <>
        {views.map((view) => (
          <RenderViewContainer view={view} key={view._id} />
        ))}
      </>
    );
  }

  const view = views.find((v) => v.value === routeValue) as View;
  return <RenderViewContainer view={view} />;
};

const RouteLoaderWrapper = () => {
  const { data: views, status } = useQuery({
    queryKey: ["views"],
    queryFn: getViews,
  });

  if (status === "loading") return <div></div>;
  if (status === "error") return <div></div>;
  if (status === "success")
    return (
      <>
        <NavBar views={views} />
        <RouteLoader views={views} />
      </>
    );
  return <div></div>;
};

const AppRouter = () => {
  return (
    <Suspense>
      <Router>
        <div>
          <Routes>
            <Route path="/" Component={RouteLoaderWrapper} index />
            <Route path="/:routeValue" Component={RouteLoaderWrapper} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  );
};

export default AppRouter;
