import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Bio from "./Component/Bio.js";
import Blog from "./Component/Blog";
import Projects from "./Component/Projects.js";
import Contact from "./Component/Contact.js";
import UX from "./Component/UX.js";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Ios from './Component/iOS';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/bio",
    element: <Bio />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/iOS",
    element: <Ios />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
      path: "/UX",
    element: <UX />,
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
