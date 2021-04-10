import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./passwordReset.style.css";

const PasswordResetForm = () => {
  const [email, setEmail] = useState("");

  // Hnadle on change gets the value when we type and set it to the local state
  const handleOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    console.log(email);
  };

  // HandleOnSubmit submits the form when we login
  const hnadleOnSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="password-reset-form">
      <Card className="py-4 px-4">
        <Form onSubmit={hnadleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleOnChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <a href="/" className="text-right">
          Login Now
        </a>
      </Card>
    </div>
  );
};

export default PasswordResetForm;
