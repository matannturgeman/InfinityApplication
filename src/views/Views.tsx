import React, { lazy } from "react";

import Box from "../components/Box/Box";
import EmptyBox from "../components/EmptyBox/EmptyBox";

import { VIEWS } from "../constants/views.constants";
import { View } from "../types/Views/views.types";

function RenderView({ view }: { view: View }) {
  const { value, data } = view;
  const Component = viewsComponents[value] ?? DefaultComponent;

  return <Component view={data} />;
}

export function RenderViewContainer({ view }: { view: View }): JSX.Element {
  const { value, isEmpty } = view;
  const BoxContainer = isEmpty ? EmptyBox : Box;

  return (
    <BoxContainer key={value} id={`page-${value}`}>
        <RenderView view={view} />
    </BoxContainer>
  );
}

const DefaultComponent = () => <h1>Example Text</h1>;

const viewsComponents = {
  [VIEWS.home]: lazy(() => import("../views/Home/Home")),
  [VIEWS.aboutUs]: lazy(() => import("../views/AboutUs/AboutUs")),
  [VIEWS.gallery]: lazy(() => import("../views/Gallery/Gallery")),
  [VIEWS.ContactUs]: lazy(() => import("../views/ContactUs/ContactUs")),
};
