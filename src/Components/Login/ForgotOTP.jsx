// import React, { useState, useEffect, useRef } from "react";
// import Form from "react-bootstrap/Form";
// import { Link } from "react-router-dom";
// import { post } from "../../Services/ApiHelper";
// import { SEND_OTP, VERIFY_OTP } from "../../utls/constants";
// import { Spinner } from "react-bootstrap";

// const ForgotOTP = ({ onNext }) => {
//   const [timeLeft, setTimeLeft] = useState(120);
//   const [timeExpired, setTimeExpired] = useState(false);
//   const [wrongOTP, setWrongOTP] = useState(false);
//   const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
//   const [otpError, setOtpError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   // Count Down
//   useEffect(() => {
//     const countdown = setInterval(() => {
//       setTimeLeft((prevTime) => {
//         if (prevTime === 0) {
//           setTimeExpired(true);
//           clearInterval(countdown);
//           return 0;
//         }
//         return prevTime - 1;
//       });
//     }, 1000);

//     return () => clearInterval(countdown);
//   }, []);

//   //   useEffect(() => {
//   //     const otpValues = inputRefs.map((ref) => ref.current.value);
//   //     setWrongOTP(otpValues.every((val) => val === "0"));
//   //   }, [inputRefs]);

//   const formatTime = (seconds) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
//       .toString()
//       .padStart(2, "0")}`;
//   };

//   // Input Value check
//   const handleInputChange = (index, value) => {
//     if (value.length === 1 && index < inputRefs.length - 1) {
//       inputRefs[index + 1].current.focus();
//     }
//     // const otpValues = inputRefs.map((ref) => ref.current.value);
//     // setWrongOTP(otpValues.every((val) => val === "0"));
//   };

//   const handleSubmit = (event) => {
//     setIsLoading(true);
//     event.preventDefault();
//     const otpValues = inputRefs.map((ref) => ref.current.value).join("");

//     if (otpValues === "0000") {
//       setWrongOTP(true);
//       setOtpError("");
//     } else if (!otpValues) {
//       setOtpError("OTP is required");
//       setWrongOTP(false);
//     } else {
//       post(VERIFY_OTP, { otp: otpValues, email: localStorage.getItem("email") })
//         .then((response) => {
//           if (response.succeeded === true) {
//             setIsLoading(false);
//             localStorage.setItem("otp", otpValues);
//             setOtpError("");
//             setWrongOTP(false);
//             onNext();
//           } else {
//             setOtpError("Invalid OTP");
//             setWrongOTP(true);
//           }
//         })
//         .catch((error) => {
//           setIsLoading(false);
//           setOtpError("Invalid OTP");
//           setWrongOTP(true);
//         });
//     }
//   };
//   const resendOtp = () => {
//     setIsLoading(true);
//     post(SEND_OTP, { email: localStorage.getItem("email") })
//       .then((response) => {
//         console.log(response);
//         if (response.succeeded === true) {
//           setIsLoading(false);
//           // setEmailError("");
//           onNext();
//         } else {
//           // setEmailError(response.messages[0]);
//         }
//       })
//       .catch((error) => {
//         // setEmailError("Invalid Email");
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
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
//               Enter the 4 digits code that you received on your email.
//             </div>

//             <div
//               className="time-count fs-20 fw-bold text-center pb-3 mb-2"
//               style={{ color: "#D57D2A" }}
//             >
//               {!timeExpired && !wrongOTP && <>{formatTime(timeLeft)}</>}
//               {timeExpired && <>OTP Expired</>}
//               {wrongOTP && <>Wrong OTP Entered</>}
//             </div>

//             <Form.Group className="mb-4">
//               <div className="d-flex gap-3 input-otp">
//                 {inputRefs.map((ref, index) => (
//                   <Form.Control
//                     key={index}
//                     type="number"
//                     maxLength={1}
//                     pattern="[0-9]"
//                     ref={ref}
//                     onChange={(e) => handleInputChange(index, e.target.value)}
//                   />
//                 ))}
//               </div>
//             </Form.Group>
//             <div className="d-md-flex align-items-center justify-content-between">
//               <div
//                 className="fs-14 fw-medium lh-sm"
//                 style={{ color: "#808080" }}
//               >
//                 If you didn’t receive a code!{" "}
//                 {isLoading ? (
//                   <Spinner
//                     animation="border"
//                     style={{
//                       color: "#D57D2A",
//                       position: "absolute",
//                       right: "10%",
//                       top: "10%",
//                     }}
//                   />
//                 ) : (
//                   <Link
//                     to=""
//                     onClick={resendOtp}
//                     className="fw-bold fs-14 fw-bold text-decoration-underline"
//                     style={{ color: "#D57D2A" }}
//                   >
//                     Resend OTP
//                   </Link>
//                 )}
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

// export default ForgotOTP;
