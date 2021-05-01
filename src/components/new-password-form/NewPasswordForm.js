import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import "./newPasswordForm.style.css";
import { useSelector } from "react-redux";

const initialState = {
  otp: "",
  password: "",
  confirmPassword: "",
};

const NewPasswordForm = () => {
  const [newPassword, setNewPassword] = useState(initialState);
  // Hnadle on change gets the value when we type and set it to the local state
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setNewPassword({ ...newPassword, [name]: value });
  };

  // HandleOnSubmit submits the form when we login
  const hnadleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="new-pass-form">
      <Card className="py-4 px-4">
        <Form onSubmit={hnadleOnSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>OTP</Form.Label>
            <Form.Control
              name="otp"
              placeholder="Enter email"
              value={newPassword.otp}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>New Paswword</Form.Label>
            <Form.Control
              name="otp"
              placeholder="Enter password"
              value={newPassword.password}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              name="otp"
              placeholder="confirm password"
              value={newPassword.confirmPassword}
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

export default NewPasswordForm;
