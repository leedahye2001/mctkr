// import React, { useState } from "react";
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import app from "../firebase-config";

// const Login = () => {
//   const [registerEmail, setRegisterEmail] = useState("");
//   const [registerPassword, setRegisterPassword] = useState("");

//   const auth = getAuth(app);

//   const loginSuccess = (email, uid) => {
//     const login_area = document.getElementById("login-area");
//     login_area.innerHTML = `<h2>Login 성공!</h2><div>uid: ${uid}</div><div>email: ${email}</div>`;
//   };

//   const login = async (e) => {
//     signInWithEmailAndPassword(auth, registerEmail, registerPassword)
//       .then((userCredential) => {
//         const user = userCredential.user;
//         console.log(user);
//         alert("성공적으로 로그인 되었습니다!");
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
//           id="signInemail"
//           placeholder="email을 입력하세요."
//           onChange={(e) => {
//             setRegisterEmail(e.target.value);
//           }}
//         />
//         <input
//           type={"password"}
//           id="signInPassword"
//           placeholder="비밀번호를 입력하세요."
//           onChange={(e) => {
//             setRegisterPassword(e.target.value);
//           }}
//         />
//         <button onClick={login}>로그인</button>
//       </div>
//     </div>
//   );
//   // };
// };

// export default Login;

import React from "react";

const Login = () => {
  return <div>Login</div>;
};

export default Login;
