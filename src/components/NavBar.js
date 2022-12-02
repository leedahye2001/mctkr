import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/mct_logo.jpeg";
import NavLinks from "./NavLinks";
// import Button from "./Button";

const NavBar = ({ active, setActive, user, handleLogout }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const userId = user?.uid;
  console.log("userId", userId);
  console.log("name", user?.displayName);

  return (
    <nav className="top-0 sticky bg-white lg:shadow-md py-2 z-[100]">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 lg:w-auto w-full top-0 flex justify-between shadow-md lg:shadow-none">
          <a href="/">
            <img
              src={Logo}
              className="h-7 sm:h-11 cursor-pointer"
              alt="mct Logo"
            />
          </a>
          <div
            className="text-3xl lg:hidden align-center p-1 sm:p-3"
            onClick={handleClick}
          >
            {click ? (
              <FaTimes size={22} style={{ color: "#000" }} />
            ) : (
              <FaBars size={22} style={{ color: "#000" }} />
            )}
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center gap-8 py-1">
          <NavLinks />
        </ul>
        <div className="lg:block hidden">
          {/* <Button /> */}
          <div>
            <ul>
              {userId ? (
                <>
                  <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                    {user?.displayName}
                  </p>
                  <li className="" onClick={handleLogout}>
                    Logout
                  </li>
                </>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <li
                    className={` ${active === "login" ? "active" : ""}`}
                    onClick={() => setActive("login")}
                  >
                    Login
                  </li>
                </Link>
              )}
            </ul>
          </div>
        </div>

        {/* mobile */}
        <ul
          className={`
        lg:hidden bg-white fixed w-3/4 shadow-2xl top-0 overflow-y-auto bottom-0 py-24 pl-3 sm:pl-5 pr-0 sm:pr-5
        duration-500 ${click ? "left-[25%]" : "left-[100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5 flex justify-center">
            {/* <Button /> */}
            <div>
              <ul>
                {userId ? (
                  <>
                    <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                      {user?.displayName}
                    </p>
                    <li className="" onClick={handleLogout}>
                      Logout
                    </li>
                  </>
                ) : (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <li
                      className={` ${active === "login" ? "active" : ""}`}
                      onClick={() => setActive("login")}
                    >
                      Login
                    </li>
                  </Link>
                )}
              </ul>
            </div>
          </div>
          {/* <div className="row g-3">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {userId ? (
                  <>
                    <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                      {user?.displayName}
                    </p>
                    <li className="nav-item nav-link">Logout</li>
                  </>
                ) : (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <li
                      className={`nav-item nav-link ${
                        active === "login" ? "active" : ""
                      }`}
                      onClick={() => setActive("login")}
                    >
                      Login
                    </li>
                  </Link>
                )}
              </ul>
            </div> */}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import React, { useState } from "react";
// import { toast } from "react-toastify";
// import { auth } from "../firebase-config";
// import { useNavigate } from "react-router-dom";

// const initialState = {
//   email: "",
//   password: "",
//   confirmPassword: "",
// };

// const Login = ({ setActive, setUser }) => {
//   const [state, setState] = useState(initialState);
//   const [signUp, setSignUp] = useState(false);

//   const { email, password, confirmPassword } = state;

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };

//   const handleAuth = async (e) => {
//     e.preventDefault();
//     if (!signUp) {
//       if (email && password) {
//         const { user } = await signInWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         // setUser(user);
//         setActive("home");
//       } else {
//         return toast.error("All fields are mandatory to fill");
//       }
//     } else {
//       if (password !== confirmPassword) {
//         return toast.error("비밀번호가 일치하지 않습니다.");
//       }
//       if (email && password) {
//         const { user } = await createUserWithEmailAndPassword(
//           auth,
//           email,
//           password
//         );
//         await updateProfile(user, { displayName: `${email}` });
//         setActive("home");
//       } else {
//         return toast.error("All fields are mandatory to fill");
//       }
//     }
//     navigate("/");
//   };

//   return (
//     <div className="container-fluid mb-4">
//       <div className="container">
//         <div className="col-12 text-center">
//           <div className="text-center heading py-2">
//             {!signUp ? "Sign-In" : "Sign-Up"}
//           </div>
//         </div>
//         <div className="row h-100 justify-content-center align-items-center">
//           <div className="col-10 col-md-8 col-lg-6">
//             <form className="row" onSubmit={handleAuth}>
//               <div className="col-12 py-3">
//                 <input
//                   type="email"
//                   className="form-control input-text-box"
//                   placeholder="Email"
//                   name="email"
//                   value={email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="col-12 py-3">
//                 <input
//                   type="password"
//                   className="form-control input-text-box"
//                   placeholder="Password"
//                   name="password"
//                   value={password}
//                   onChange={handleChange}
//                 />
//               </div>
//               {signUp && (
//                 <div className="col-12 py-3">
//                   <input
//                     type="password"
//                     className="form-control input-text-box"
//                     placeholder="Confirm Password"
//                     name="confirmPassword"
//                     value={confirmPassword}
//                     onChange={handleChange}
//                   />
//                 </div>
//               )}

//               <div className="col-12 py-3 text-center">
//                 <button
//                   className={`btn ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
//                   type="submit"
//                 >
//                   {!signUp ? "Sign-in" : "Sign-up"}
//                 </button>
//               </div>
//             </form>
//             <div>
//               {!signUp ? (
//                 <>
//                   <div className="text-center justify-content-center mt-2 pt-2">
//                     <p className="small fw-bold mt-2 pt-1 mb-0">
//                       Don't have an account ?&nbsp;
//                       <span
//                         className="link-danger"
//                         style={{ textDecoration: "none", cursor: "pointer" }}
//                         onClick={() => setSignUp(true)}
//                       >
//                         Sign Up
//                       </span>
//                     </p>
//                   </div>
//                 </>
//               ) : (
//                 <>
//                   <div className="text-center justify-content-center mt-2 pt-2">
//                     <p className="small fw-bold mt-2 pt-1 mb-0">
//                       Already have an account ?&nbsp;
//                       <span
//                         style={{
//                           textDecoration: "none",
//                           cursor: "pointer",
//                           color: "#298af2",
//                         }}
//                         onClick={() => setSignUp(false)}
//                       >
//                         Sign In
//                       </span>
//                     </p>
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
