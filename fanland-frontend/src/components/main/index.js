import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./index.css";
import ClubPage from "./clubpage";
import ClubChatRoom from "./clubchatroom";
import CreateFanClub from "./createFanClub";
import Home from "./home";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Home />,
  },
  {
    path: "/explore",
    main: () => <h2>Explore</h2>,
  },
  {
    path: "/user_admin_clubs",
    main: () => <h2>Your admin clubs</h2>,
  },
  {
    path: "/clubs/:clubId",
    main: () => <ClubPage />,
  },
  {
    path: "/chats/:chatRoomId",
    main: () => <ClubChatRoom userName={"Mayank"} />,
  },
  {
    path: "/create/fanclub",
    main: () => <CreateFanClub />,
  },
];

export default function Main() {
  return (
    <Router>
      <div
        className="main-container text-white"
        style={{ backgroundColor: "black" }}
      >
        <div className="container-fluid">
          <div className="row" style={{ height: "100vh" }}>
            <div className="col-1 bg-color-secondary p-0">
              <div className="py-3">
                <div className="px-3 mb-3">
                  <Link to="/" className="link">
                    <i className="fas fa-home icon-style"></i>
                    Home
                  </Link>
                </div>
                <div className="px-3 mb-3">
                  <Link to="/explore" className="link">
                    <i className="far fa-compass icon-style"></i> Explore
                  </Link>
                </div>
              </div>
              <div className="px-3 fs-secondary">
                <div>
                  <p>Fan Clubs</p>
                </div>
                <div>
                  <Link to="#" className="link fw-bold">
                    Made by You
                  </Link>
                </div>
                <div>
                  <Link className="link fw-bold"> </Link>
                </div>
              </div>
              <div className="position-absolute col-1" style={{ bottom: 0 }}>
                <Link to="/create/fanclub" className="link">
                  <div className="custom-border-top py-3 px-3">
                    <i className="fas fa-plus-circle icon-style fa-2x"></i>
                    New Club
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-10 bg-color-primary">
              <div className="d-flex justify-content-between px-1 py-2">
                <div className="d-flex">
                  <div>
                    <button className="bg-color-primary border-0">
                      <i class="fas fa-angle-left icon-style-2"></i>
                    </button>
                    <button className="bg-color-primary border-0">
                      <i class="fas fa-angle-right icon-style-2"></i>
                    </button>
                  </div>
                  <div className="mx-4">
                    <button
                      className="border-0 fs-small"
                      style={{
                        borderTopLeftRadius: "10px",
                        borderBottomLeftRadius: "10px",
                      }}
                    >
                      <i className="fas fa-search"></i>
                    </button>
                    <input
                      type="text"
                      className="search-box border-0"
                      placeholder="search"
                      style={{
                        fontSize: "14px",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                      }}
                    ></input>
                  </div>
                </div>
                <div className="d-flex px-3">
                  <img
                    src="https://pfpmaker.com/_nuxt/img/profile-3-1.3e702c5.png"
                    alt="W3Schools.com"
                    height="30"
                    style={{ borderRadius: "50%" }}
                    className="mx-2"
                  />
                  <Link to="#" className="link-2">
                    <p className="pt-1 px-1">Maayami</p>
                  </Link>
                  <button className="pt-1 px-2 bg-color-primary border-0">
                    <i className="fas fa-angle-down icon-style-2"></i>
                  </button>
                </div>
                {/* incomplete */}
              </div>
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
            <div className="col-1 bg-color-secondary"></div>
          </div>
        </div>
      </div>
    </Router>
  );
}
