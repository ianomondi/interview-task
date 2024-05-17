import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { FaCircleCheck } from "react-icons/fa6";

const SuccessfullPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setShowEmailError(true);
    } else {
      setShowEmailError(false);
    }

    if (!password) {
      setShowPasswordError(true);
    } else {
      setShowPasswordError(false);
    }
    navigate("/");
  };
  return (
    <div className="login-content-form">
      <div className="fs-20">Welcome to SaharaDesk </div>
      <div className="h1">Sign in</div>
      <div className="succ-notification" style={{ background: "#F1EFEF" }}>
        <div>
          <FaCircleCheck />
          <div className="fs-18 fw-medium pt-2" style={{ color: "#72777A" }}>
            Password reset successful. Proceed to{" "}
            <br className="d-none d-lg-block" /> Login.
          </div>
        </div>
      </div>
      <Form className="form__content" onSubmit={handleSubmit}>
        <Form.Group className="mb-4" controlId="login.email">
          <Form.Label>Enter your username or email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username or email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {showEmailError && <div className="error-text">Wrong Username</div>}
        </Form.Group>
        <Form.Group className="mb-2" controlId="login.pass">
          <Form.Label>Enter your Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPasswordError && (
            <div className="error-text">Wrong Password</div>
          )}
        </Form.Group>
        <div className="d-md-flex align-items-center justify-content-between">
          <Form.Check type="switch" id="custom-switch" label="Remember me" />
          <div className="text-center mt-3 mt-md-0">
            <Link to="/forgot-password" className="text-decoration-underline">Forgot Password</Link>
          </div>
        </div>
        <div className="text-md-end text-center">
          <button
            onClick={() => navigate("/")}
            type="submit"
            className="submit-btn"
          >
            Sign in
          </button>
        </div>
      </Form>
    </div>
  );
};

export default SuccessfullPassword;
