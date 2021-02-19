import Main from "./components/main";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <div>
        <nav>
        <ul>
        <li>
        <Link to="/login">Login</Link>
        </li>
        </ul>
        </nav>
      </div> */}
        <Switch>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route exact path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
