import * as React from "react";
import MainLayout from "./components/MainLayout/MainLayout";
import Router from "./router/Router";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="app">
        <MainLayout>
          <Router />
        </MainLayout>
      </div>
    </QueryClientProvider>
  );
}

export default App;
