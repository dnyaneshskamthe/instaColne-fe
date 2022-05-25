import React from 'react';
import {StrictMode} from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import LandingPage from "./components/LandingPage";
import App from './App';
import {createRoot} from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  
  <StrictMode><BrowserRouter>
    {/* <LandingPage /> */}
    <App/></BrowserRouter>
  </StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

