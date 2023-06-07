import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import Popular from "./pages/Popular";
import Battle from "./pages/Battle";
import Nav from "./Nav";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "popular",
        element: <Popular />,
      },
      {
        path: "battle",
        element: <Battle />,
      },
      {
        path: "*",
        element: <h1>Some error</h1>,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="container">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

/* <BrowserRouter router={router}>
        <div className="container">
          <Nav />
        </div>
      </BrowserRouter>*/
