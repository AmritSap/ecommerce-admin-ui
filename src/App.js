import Login from "./pages/login/Login.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard.js";
import Category from "./pages/category/Category.js";
import Product from "./pages/product/Product.js";
import AddProduct from "./pages/product/AddProduct.js";
import PasswordReset from "./pages/password-reset/Password-reset";
import EditProduct from "./pages/edit-product/EditProduct";
import {PrivateRoute} from "./components/privateRoute/PrivateRoute"
function App() {
  return (
    <div className="App">
      <Router>
        {" "}
        <Switch>
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute exact path="/category">
            <Category />
          </PrivateRoute>

          <PrivateRoute exact path="/products">
            <Product />
          </PrivateRoute>

          <PrivateRoute exact path="/product/new">
            <AddProduct />
          </PrivateRoute>

          <PrivateRoute exact path="/product/:_id">
            <EditProduct />
          </PrivateRoute>

          <Route exact path="/reset-password">
            <PasswordReset />
          </Route>

          <Route exact path="/">
            <Login />
          </Route>

          <Route exact path="*">
            <h1>404 page not found</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
