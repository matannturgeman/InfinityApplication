import * as React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Views from "./views/Views"

function App() {
  return (
    <div className="app">
      <MainLayout>
        <Views />
      </MainLayout>
    </div>
  );
}

export default App;
