import Main from "./components/main";
import Auth from "./components/auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
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
  );
}

export default App;
