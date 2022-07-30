import * as React from "react";
import Box from "../components/Box/Box";
import EmptyBox from "../components/EmptyBox/EmptyBox";
import AboutUs from "./AboutUs/AboutUs";
import * as views from "../data/views.json";
import { VIEWS } from "../constants/views.constants";

function Views() {
  const renderView = (view) => {
    const { value } = view;

    switch (value) {
      case VIEWS.aboutUs : {
        return <AboutUs view={view} />
      }
      default:
        return <h1>Example Text</h1>
    }
  };

  const renderBox = (view) => {
    const { value, isEmpty } = view;
    const BoxContainer = isEmpty ? EmptyBox : Box;

    return (
      <BoxContainer key={value} id={`page-${value}`}>
        {renderView(view)}
      </BoxContainer>
    );
  };

  return <>{Array.from(views).map(renderBox)}</>;
}

export default Views;
