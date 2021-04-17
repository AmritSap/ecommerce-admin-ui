import Login from "./pages/login/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Category from "./pages/category/Category.js";
import Product from "./pages/product/Product.js";
import AddProduct from "./pages/product/AddProduct.js";
import PasswordReset from "./pages/password-reset/Password-reset";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/category">
            <Category />
          </Route>

          <Route path="/products">
            <Product />
          </Route>
          <Route path="/product/new">
            <AddProduct />
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
