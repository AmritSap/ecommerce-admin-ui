import Login from "./pages/login/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.js";
import PasswordReset from "./pages/password-reset/Password-reset";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/reset-password">
            <PasswordReset />
          </Route>
          
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
