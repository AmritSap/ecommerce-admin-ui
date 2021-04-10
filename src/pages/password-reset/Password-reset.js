import React from "react";
import "./passwordReset.style.css";
import PasswordResetForm from "../../components/password-reset-form/PasswordResetForm";

const PasswordReset = () => {
  return (
    <div className="passwordReset-page bg-dark">
      <PasswordResetForm />
    </div>
  );
};

export default PasswordReset;
