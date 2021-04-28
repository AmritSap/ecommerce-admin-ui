import React, { useState, useEffect } from "react";
import { Form, Button, Card, Spinner, Alert } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { sendLogin, userAutoLogin } from "../../pages/login/loginAction.js";

import { updateLogin } from "../../pages/login/loginSlice";

import "./loginForm.style.css";

const initialState = {
  email: "amrittsapkota32@gmail.com",
  password: "123456",
};
const LoginForm = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, loginResponse, isAuth } = useSelector(
    (state) => state.login
  );
  const [login, setLogin] = useState(initialState);

  let { from } = location.state || { from: { pathName: "/" } };

  // get the value from broewser
  useEffect(() => {
    !isAuth && dispatch(userAutoLogin());

    if (isAuth) history.replace(from);
  }, [isAuth]);
  // Hnadle on change gets the value when we type and set it to the local state
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
    console.log(login);
  };

  // HandleOnSubmit submits the form when we login
  const hnadleOnSubmit = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("plz fill up the input fields");
    }

    dispatch(sendLogin(login));
    // history.push("/dashboard");
  };

  return (
    <div className="login-form">
      <Card className="p-1">
        {isLoading && <Spinner variant="primary" animation="border" />}

        {loginResponse?.status==="error" && (
          <Alert
            variant= "danger"
          >
            {loginResponse.message}
          </Alert>
        )}
        <Form onSubmit={hnadleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={login.email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              value={login.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <a href="/reset-password" className="text-right">
          Forgot Password?
        </a>
      </Card>
    </div>
  );
};

export default LoginForm;
