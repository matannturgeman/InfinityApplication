import * as React from "react";

import Box from "../components/Box/Box";
import EmptyBox from "../components/EmptyBox/EmptyBox";

import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs/ContactUs";

import views from "../data/views.json";
import { VIEWS } from "../constants/views.constants";
import { View } from "../types/Views/views.types";

function RenderViewContainer({ view }: { view: View }): JSX.Element {
  const { value, isEmpty } = view;
  const BoxContainer = isEmpty ? EmptyBox : Box;

  return (
    <BoxContainer key={value} id={`page-${value}`}>
      <RenderView view={view} />
    </BoxContainer>
  );
}

function RenderView({ view }: { view: View }) {
  const { value, data } = view;

  switch (value) {
    case VIEWS.home: {
      return <Home view={data} />;
    }
    case VIEWS.aboutUs: {
      return <AboutUs view={data} />;
    }
    case VIEWS.gallery: {
      return <Gallery view={data} />;
    }
    case VIEWS.ContactUs: {
      return <ContactUs view={data} />;
    }
    default:
      return <h1>Example Text</h1>;
  }
}

const Views = () => (
  <>
    {views.map((view) => (
      <RenderViewContainer view={view} />
    ))}
  </>
);

export default Views;
