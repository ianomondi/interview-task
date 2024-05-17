import React, { useState } from "react";
import { Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { post } from "../../Services/ApiHelper";
import { RESSET_PASSWORD } from "../../utls/constants";
import { toast } from "react-toastify";

const NewPassword = ({ onNext }) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleNewPasswordChange = (event) => {
    const value = event.target.value;
    setNewPassword(value);
    // Reset password error when user starts typing again
    setPasswordError("");
    // Check if password meets policy
    if (value.length < 8) {
      setPasswordError("Check password policy");
    } else {
      setPasswordError("");
    }
    // Reset confirm password error if it matches new password
    if (confirmPassword === value) {
      setConfirmPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    // Reset confirm password error when user starts typing again
    setConfirmPasswordError("");
    // Check if confirm password matches new password
    if (value !== newPassword) {
      setConfirmPasswordError("Password not identical");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    const email = localStorage.getItem("email");
    // convert email to base64
    const bas64email = btoa(email);
    event.preventDefault();
    // Password validation logic
    if (!newPassword || newPassword.length < 8) {
      setPasswordError("Check password policy");
      return;
    }
    if (newPassword !== confirmPassword) {
      setConfirmPasswordError("Password not identical");
      return;
    }
    post(RESSET_PASSWORD, {
      newpassword: newPassword,
      otp: localStorage.getItem("otp"),
      secrete: bas64email,
    })
      .then((response) => {
        console.log(response);
        if (response.succeeded === true) {
          setIsLoading(false);
          toast.success("Password resset was successful", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: false,
          });

          setTimeout(() => {
            navigate("/");
          }, 3000);
        }
      })
      .catch((erro) => {
        setIsLoading(false);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="login-content-form">
      <Form className="form__content" onSubmit={handleSubmit}>
        <div className="forgot-grid-content">
          <div>
            <div className="fs-20">Welcome to SaharaDesk</div>
            <div className="h1 fs-40">New Password</div>
            <div className="fs-16 fw-bold pt-3" style={{ color: "#808080" }}>
              Password policy. Your password must contain:
            </div>
            <ul className="password-info pb-3">
              <li>Minimum 8 characters</li>
              <li>At least one special character</li>
              <li>At least one number from 0-9</li>
            </ul>
          </div>
          <div className="mt-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4" controlId="newPassword">
                <Form.Label>Enter New Password</Form.Label>
                <Form.Text className="position-relative">
                  <Form.Control
                    type="password"
                    placeholder="New password"
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                  />
                  {passwordError && (
                    <Form.Text className="text-error-pass">
                      {passwordError}
                    </Form.Text>
                  )}
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-2" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Text className="position-relative">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                  {confirmPasswordError && (
                    <Form.Text className="text-error-pass">
                      {confirmPasswordError}
                    </Form.Text>
                  )}
                </Form.Text>
              </Form.Group>
            </Form>
            <div className="d-md-flex align-items-center justify-content-between">
              <div
                className="fs-14 fw-medium lh-sm"
                style={{ color: "#808080" }}
              >
                Did you remember your password?{" "}
                <Link
                  to="/sign-in"
                  className="fw-bold text-decoration-underline"
                >
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="text-md-end text-center">
          {isLoading ? (
            <Spinner
              animation="border"
              style={{
                color: "#D57D2A",
                position: "absolute",
                right: "10%",
                top: "10%",
              }}
            />
          ) : (
            <button type="submit" className="submit-btn">
              Continue
            </button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default NewPassword;
