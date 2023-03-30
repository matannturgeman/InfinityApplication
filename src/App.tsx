import * as React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Router from "./router/Router";

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Router />
      </MainLayout>
    </div>
  );
}

export default App;
