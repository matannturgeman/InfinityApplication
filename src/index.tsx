import * as React from "react";
import * as ReactDOM from 'react-dom/client';
// @ts-ignore
import App from "./App";
import './index.css';

// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
