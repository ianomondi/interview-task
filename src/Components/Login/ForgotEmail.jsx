// import React, { useState } from "react";
// import { Form, Spinner } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { SEND_OTP } from "../../utls/constants";
// import { set } from "lodash";

// const ForgotEmail = ({ onNext }) => {
//   const [email, setEmail] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     setIsLoading(true);
//     event.preventDefault();
//     if (!email.trim()) {
//       setEmailError("Email is required");
//     } else {
//       post(SEND_OTP, { email: email })
//         .then((response) => {
//           console.log(response);
//           if (response.succeeded === true) {
//             setIsLoading(false);
//             localStorage.setItem("email", email);
//             setEmailError("");
//             onNext();
//           } else {
//             setEmailError(response.messages[0]);
//           }
//         })
//         .catch((error) => {
//           setIsLoading(false);
//           setEmailError("Invalid Email");
//         })
//         .finally(() => {
//           setIsLoading(false);
//         });
//     }
//   };

//   return (
//     <div className="login-content-form">
//       <Form className="form__content" onSubmit={handleSubmit}>
//         <div className="forgot-grid-content">
//           <div>
//             <div className="fs-20">Welcome to SaharaDesk</div>
//             <div className="h1 fs-40">Forgot Password</div>
//           </div>
//           <div className="mt-auto">
//             <div className="fs-16 pb-4 lh-sm" style={{ color: "#808080" }}>
//               Enter your email for the verification process. If the email is
//               valid we will send a 4 digit code to your <br /> email.
//             </div>
//             <Form.Group className="mb-4">
//               <Form.Label>Enter your Email</Form.Label>
//               <Form.Text className="position-relative">
//                 <Form.Control
//                   type="email"
//                   placeholder="Email"
//                   value={email}
//                   onChange={handleEmailChange} // Update the email state
//                 />
//                 {emailError && (
//                   <div className="text-error-pass text-danger">
//                     {emailError}
//                   </div>
//                 )}
//               </Form.Text>
//             </Form.Group>
//             <div className="d-md-flex align-items-center justify-content-between">
//               <div
//                 className="fs-14 fw-medium lh-sm"
//                 style={{ color: "#808080" }}
//               >
//                 Did you remember your password?{" "}
//                 <Link
//                   to="/sign-in"
//                   className="fw-bold text-decoration-underline"
//                 >
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="text-md-end text-center">
//           {isLoading ? (
//             <Spinner
//               animation="border"
//               style={{
//                 color: "#D57D2A",
//                 position: "absolute",
//                 right: "10%",
//                 top: "10%",
//               }}
//             />
//           ) : (
//             <button type="submit" className="submit-btn">
//               Continue
//             </button>
//           )}
//         </div>
//       </Form>
//     </div>
//   );
// };

// export default ForgotEmail;
