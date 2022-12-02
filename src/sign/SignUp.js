// // // import React, { useState } from "react";
// // // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // // const SignUp = () => {
// // //   const [registerEmail, setRegisterEmail] = useState("");
// // //   const [registerPassword, setRegisterPassword] = useState("");

// // //   // const register = async (e) => {
// // //   //   try {
// // //   //     const user = await createUserWithEmailAndPassword(
// // //   //       auth,
// // //   //       registerEmail,
// // //   //       registerPassword
// // //   //     );
// // //   //     e.preventDefault();
// // //   //     console.log(user);
// // //   //   } catch (error) {
// // //   //     console.log(error.message);
// // //   //   }
// // //   // };

// // //   const signup = async (e) => {
// // //     const auth = getAuth();
// // //     try {
// // //       const user = createUserWithEmailAndPassword(
// // //         auth,
// // //         registerEmail,
// // //         registerPassword
// // //       );
// // //       e.preventDefault();
// // //       console.log(user);
// // //     } catch (error) {
// // //       console.log(error.message);
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <input
// // //         type="email"
// // //         id="signUpemail"
// // //         placeholder="Email"
// // //         onChange={(e) => {
// // //           setRegisterEmail(e.target.value);
// // //         }}
// // //       />
// // //       <input
// // //         type="password"
// // //         id="signUpPassword"
// // //         placeholder="EmailPassword"
// // //         onChange={(e) => {
// // //           setRegisterPassword(e.target.value);
// // //         }}
// // //       />
// // //       <button onClick={signup}>회원가입</button>
// // //     </div>
// // //   );
// // //   // };
// // // };

// // // export default SignUp;

// // import React, { useState } from "react";
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// // import app from "../firebase-config";

// // const SignUp = () => {
// //   const [registerEmail, setRegisterEmail] = useState("");
// //   const [registerPassword, setRegisterPassword] = useState("");

// //   const auth = getAuth(app);

// //   const signup = async (e) => {
// //     createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
// //       .then((userCredential) => {
// //         const user = userCredential.user;
// //         console.log(user);
// //         alert("회원가입 되었습니다!");
// //       })
// //       .catch((error) => {
// //         const errorCode = error.code;
// //         // const errorMessage = error.errorMessage;
// //         alert(errorCode);
// //       });
// //   };

// //   return (
// //     <div>
// //       <div>
// //         <input
// //           type={"email"}
// //           id="signUpemail"
// //           placeholder="email을 입력하세요."
// //           onChange={(e) => {
// //             setRegisterEmail(e.target.value);
// //           }}
// //         />
// //         <input
// //           type={"password"}
// //           id="signUpPassword"
// //           placeholder="비밀번호를 입력하세요."
// //           onChange={(e) => {
// //             setRegisterPassword(e.target.value);
// //           }}
// //         />
// //         <button onClick={signup}>회원가입</button>
// //       </div>
// //     </div>
// //   );
// //   // };
// // };

// // export default SignUp;

// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { UserAuth } from "../context/AuthContext";

// const SignUp = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const { createUser } = UserAuth();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     try {
//       await createUser(email, password);
//       navigate("/account");
//     } catch (e) {
//       setError(e.message);
//       console.log(e.message);
//     }
//   };

//   return (
//     <div className="py-20 px-40">
//       <div>
//         <h1>SignUp</h1>
//       </div>
//       <form onSubmit={handleSubmit}>
//         <div className="flex flex-col py-2">
//           <label className="py-2">Email Address :</label>
//           <input
//             type="email"
//             placeholder="email address"
//             className="border p-3"
//             onChange={(e) => {
//               setEmail(e.target.value);
//             }}
//           />
//         </div>
//         <div className="flex flex-col py-2">
//           <label className="py-2">Password :</label>
//           <input
//             type="password"
//             placeholder="password"
//             className="border p-3"
//             onChange={(e) => {
//               setPassword(e.target.value);
//             }}
//           />
//         </div>
//         <button
//           className="border border-blue-500 bg-blue-600
//         hover:bg-blue-500 w-full p-4 my-2 text-white"
//         >
//           회원가입
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;
