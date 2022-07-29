import * as React from "react";
import Box from "../components/Box/Box";
import EmptyBox from "../components/EmptyBox/EmptyBox";
import view from "../data/views.json";

function Views() {
  const renderView = (view) => {
    const { label, value, isEmpty } = view;
    const BoxContainer = isEmpty ? EmptyBox : Box;

    return (
      <BoxContainer key={value} id={`page-${value}`}>
        <h1>This is the {label} page</h1>
      </BoxContainer>
    );
  };

  return <>{view.map(renderView)}</>;
}

export default Views;
