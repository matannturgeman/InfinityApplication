import * as React from "react";
import Box from "../components/Box/Box";
import EmptyBox from "../components/EmptyBox/EmptyBox";
import pages from "../data/pages.json";

function Views() {
  return (
    <>
      {pages.map(({ label, value }) => {
        return (
          <EmptyBox key={value} id={`page-${value}`}>
            <h1>This is the {label} page</h1>
          </EmptyBox>
        );
      })}
      <Box>
        <h1>Example Text</h1>
      </Box>
    </>
  );
}

export default Views;
