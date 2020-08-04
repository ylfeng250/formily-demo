import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import React from "react";
import Home from "./page/Home";
import Demo1 from "./page/Demo1";
const routConfig = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Demo1",
    path: "/Demo1",
    component: Demo1,
  },
];
const RouteComponent = () => {
  return (
    <Router>
      <div className="box">
        <ul className="nav">
          {routConfig.map((config) => {
            return (
              <li key={config.path}>
                <Link to={config.path}>{config.name}</Link>
              </li>
            );
          })}
        </ul>

        <div className="content">
          {routConfig.map((config) => {
            return (
              <Route
                exact
                path={config.path}
                component={config.component}
                key={config.path}
              />
            );
          })}
        </div>
      </div>
    </Router>
  );
};

export default RouteComponent;
