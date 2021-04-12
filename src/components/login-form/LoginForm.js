import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import "./loginForm.style.css";

const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const history = useHistory();
  const [login, setLogin] = useState(initialState);

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
    console.log(login);
    history.push("/dashboard");
  };

  return (
    <div className="login-form">
      <Card className="py-4 px-4">
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
