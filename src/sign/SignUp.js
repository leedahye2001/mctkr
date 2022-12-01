// // import React, { useState } from "react";
// // import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// // const SignUp = () => {
// //   const [registerEmail, setRegisterEmail] = useState("");
// //   const [registerPassword, setRegisterPassword] = useState("");

// //   // const register = async (e) => {
// //   //   try {
// //   //     const user = await createUserWithEmailAndPassword(
// //   //       auth,
// //   //       registerEmail,
// //   //       registerPassword
// //   //     );
// //   //     e.preventDefault();
// //   //     console.log(user);
// //   //   } catch (error) {
// //   //     console.log(error.message);
// //   //   }
// //   // };

// //   const signup = async (e) => {
// //     const auth = getAuth();
// //     try {
// //       const user = createUserWithEmailAndPassword(
// //         auth,
// //         registerEmail,
// //         registerPassword
// //       );
// //       e.preventDefault();
// //       console.log(user);
// //     } catch (error) {
// //       console.log(error.message);
// //     }
// //   };

// //   return (
// //     <div>
// //       <input
// //         type="email"
// //         id="signUpemail"
// //         placeholder="Email"
// //         onChange={(e) => {
// //           setRegisterEmail(e.target.value);
// //         }}
// //       />
// //       <input
// //         type="password"
// //         id="signUpPassword"
// //         placeholder="EmailPassword"
// //         onChange={(e) => {
// //           setRegisterPassword(e.target.value);
// //         }}
// //       />
// //       <button onClick={signup}>회원가입</button>
// //     </div>
// //   );
// //   // };
// // };

// // export default SignUp;

// import React, { useState } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import app from "../firebase-config";

// const SignUp = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   const auth = getAuth(app);

//   const signup = async (e) => {
//     createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//         alert("회원가입 되었습니다!");
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         // const errorMessage = error.errorMessage;
//         alert(errorCode);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <input
//           type={"email"}
//           id="signUpemail"
//           placeholder="email을 입력하세요."
//           onChange={(e) => {
//             setRegisterEmail(e.target.value);
//           }}
//         />
//         <input
//           type={"password"}
//           id="signUpPassword"
//           placeholder="비밀번호를 입력하세요."
//           onChange={(e) => {
//             setRegisterPassword(e.target.value);
//           }}
//         />
//         <button onClick={signup}>회원가입</button>
//       </div>
//     </div>
//   );
//   // };
// };

// export default SignUp;

import React from "react";

const SignUp = () => {
  return <div>SignUp</div>;
};

export default SignUp;
