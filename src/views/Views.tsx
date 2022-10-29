import * as React from "react";

import Box from "../components/Box/Box";
import EmptyBox from "../components/EmptyBox/EmptyBox";

import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import ContactUs from "./ContactUs/ContactUs";

import views from "../data/views.json";
import { VIEWS } from "../constants/views.constants";
import { View } from "../types/Views/views.types";


function Views() {
  const renderView = (view: View) => {
    const { value, data } = view;

    switch (value) {
      case VIEWS.aboutUs : {
        return <AboutUs view={data} />
      }
      case VIEWS.gallery: {
        return <Gallery view={data} />
      }
      case VIEWS.ContactUs: {
        return <ContactUs view={data} />
      }
      default:
        return <h1>Example Text</h1>
    }
  };

  const renderViewContainer = (view: View) => {
    const { value, isEmpty } = view;
    const BoxContainer = isEmpty ? EmptyBox : Box;

    return (
      <BoxContainer key={value} id={`page-${value}`}>
        {renderView(view)}
      </BoxContainer>
    );
  };

  return <>{views.map(renderViewContainer)}</>;
}

export default Views;
