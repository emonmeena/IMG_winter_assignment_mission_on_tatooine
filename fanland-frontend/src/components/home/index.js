import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <h2>Home</h2>,
  },
  {
    path: "/explore",
    main: () => <h2>Explore</h2>,
  },
  {
    path: "/user_admin_clubs",
    main: () => <h2>Your admin clubs</h2>,
  },
];

export default function Home() {
  return (
    <Router>
      <div>
        <nav style={{backgroundColor: "red"}}> this is nav babes</nav>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "10%",
            background: "#f0f0f0",
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/user_admin_clubs">Your clubs</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
