import React from "react";
import "./passwordReset.style.css";
import { Alert, Spinner } from "react-bootstrap";
import PasswordResetForm from "../../components/password-reset-form/PasswordResetForm";
import NewPasswordForm from "../../components/new-password-form/NewPasswordForm";
import { useSelector } from "react-redux";
const PasswordReset = () => {
  const { isLoading, passOtpRequest, showNewPassFrom } = useSelector(
    (state) => state.profile
  );
  return (
    <div className="passwordReset-page bg-dark">
      <div>
        {isLoading && <Spinner variant="primary" animation="border" />}

        {passOtpRequest?.message && (
          <Alert
            variant={passOtpRequest?.status === "sucess" ? "success" : "danger"}
          >
            {passOtpRequest?.message}
          </Alert>
        )}

        {showNewPassFrom ? <NewPasswordForm /> : <PasswordResetForm />}
      </div>
    </div>
  );
};

export default PasswordReset;
