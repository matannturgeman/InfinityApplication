import * as React from "react";
import * as ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';

const rootDOM: any = document.getElementById('root')
const root = ReactDOM.createRoot(rootDOM);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
