import React, { useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import { LoginService } from "../../Pages/Services/LoginService";

const LoginForm = () => {
  const [inputFields, setInputFields] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const login = LoginService();
  const validateValues = (props) => {
    let errors = {};
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    //Email validation
    if (!props.email.trim()) {
      errors.email = "Email cannot be empty";
    } 
    else if(!emailRegex.test(props.email.trim())){
      errors.email = "Email is Invalid";
    }
    //Password validation
    if (!props.password.trim()) {
      errors.password = "Password cannot be empty";
    } 
    return errors;
  };

  //Update state everytime a user enters/deletes values in the named input fields
  const handleChange = (e) => {
    setInputFields({...inputFields, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //prevents page from reloading
    setErrors(validateValues(inputFields));
    setSubmitting(true);
  };

  const finishSubmit = () => {
    login.fetchData(inputFields.email,inputFields.password);
  }
  //If state of errors changes re-evaluate whether form should be submitted
  useEffect(() => {
    if(Object.keys(errors).length == 0 && submitting){
      finishSubmit();
    } 
  }, [errors])

  return (
    <div className="login-content-form">
      <div className="fs-20">Welcome to SaharaDesk </div>
      <div className="h1">Sign in</div>
      <Form className="form__content" onSubmit={handleSubmit}>
        <Form.Group className="mb-2" controlId="login.email">
          <Form.Label>Enter your username or email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder="Username or email"
            value={inputFields.email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email && <div className="error-text">{errors.email}</div>}
        <Form.Group className="mb-2" controlId="login.pass">
          <Form.Label>Enter your Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={inputFields.password}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password && (
            <div className="error-text">{errors.password}</div>
          )}
        {Object.keys(errors).length == 0 && submitting && !login.loading && (
            <div className="error-text">{login.error}</div>
          )}
        <div className="d-md-flex align-items-center justify-content-between">
          <Form.Check type="switch" id="custom-switch" label="Remember me" />
          <div className="text-center mt-3 mt-md-0">
          <Link to="/forgot-password" className="text-decoration-underline">Forgot Password</Link>
          </div>
        </div>  
        <div className="text-md-end text-center">
          {login.loading ?
            <button
              type="submit"
              className="submit-btn"
              disabled={login.loading}
            >
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </button> :
            <button
              type="submit"
              className="submit-btn"
              disabled={login.loading}
              >
              Sign in
            </button>
          }
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
