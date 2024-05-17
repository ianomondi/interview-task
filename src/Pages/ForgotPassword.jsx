import React, { useState } from "react";
import "../Components/Login/Login.scss";
import logo from "../Assets/Images/login-logo.svg";
import ForgotEmail from "../Components/Login/ForgotEmail";
import ForgotOTP from "../Components/Login/ForgotOTP";
import SuccessfullPassword from "../Components/Login/SuccessfullPassword";

const ForgotPasswords = () => {
  const [step, setStep] = useState(1);

  const handleContinue = () => {
    setStep(step + 1);
  };

  return (
    <div className="login-area">
      <div className="login-contents">
        <div className="login-logo">
          <img src={logo} alt="" />
        </div>
        {/* <div className="form-con">
          {step === 1 && <ForgotEmail onNext={handleContinue} />}
          {step === 2 && <ForgotOTP onNext={handleContinue} />}
          {step === 3 && <NewPassword onNext={handleContinue} />}
          {step === 4 && <SuccessfullPassword />}
        </div> */}
      </div>
    </div>
  );
};

export default ForgotPasswords;
