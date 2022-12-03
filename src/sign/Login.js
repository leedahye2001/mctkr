import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Login = ({ setActive, setUser }) => {
  const [state, setState] = useState(initialState);
  const [signUp, setSignUp] = useState(false);

  const { email, password, firstName, lastName, confirmPassword } = state;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!signUp) {
      if (email && password) {
        const { user } = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setUser(user);
        setActive("home");
      } else {
        return alert("모든 필드가 채워지지 않았습니다.");
      }
    } else {
      if (password !== confirmPassword) {
        return alert("비밀번호가 일치하지 않습니다.");
      }
      if (firstName && lastName && email && password) {
        const { user } = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        await updateProfile(user, { displayName: `${firstName} ${lastName}` });
        setActive("home");
      } else {
        return alert("모든 필드가 채워지지 않았습니다.");
      }
    }
    navigate("/");
  };

  return (
    <div className="py-10 sm:py-20 px-10 sm:px-40">
      <div className="font-black text-4xl">{!signUp ? "Login" : "SignUp"}</div>
      <div className="py-10 justify-content-center align-items-center">
        <div className="col-10 col-md-8 col-lg-6">
          <form onSubmit={handleAuth}>
            {signUp && (
              <>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-xl font-semibold">성</label>
                  <input
                    type="text"
                    className="border p-3"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-xl font-semibold">이름</label>
                  <input
                    type="text"
                    className="border p-3"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}
            <div className="flex flex-col py-2">
              <label className="py-2 text-xl font-semibold">이메일</label>
              <input
                type="email"
                className="border p-3"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="py-2 text-xl font-semibold">비밀번호</label>
              <input
                type="password"
                className="border p-3"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </div>
            {signUp && (
              <div className="flex flex-col py-2">
                <label className="py-2 text-xl font-semibold">
                  비밀번호 확인
                </label>
                <input
                  type="password"
                  className="border p-3"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                />
              </div>
            )}

            <div className="col-12 py-3 text-center">
              <button
                className={` border border-[#11264F] bg-[#11264F]
             hover:bg-blue-900 w-full p-4 my-5 text-white btn
             ${!signUp ? "btn-sign-in" : "btn-sign-up"}`}
                type="submit"
              >
                {!signUp ? "로그인" : "회원가입"}
              </button>
            </div>
          </form>
          <div>
            {!signUp ? (
              <>
                <div className="text-center justify-content-center mt-2 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    계정이 없으신가요?&nbsp;&nbsp;
                    <span
                      className="font-semibold hover:cursor-pointer text-[#298af2]"
                      onClick={() => setSignUp(true)}
                    >
                      회원가입
                    </span>
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="text-center justify-content-center mt-2 pt-2">
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    이미 계정이 있으신가요?&nbsp;&nbsp;
                    <span
                      className="font-semibold hover:cursor-pointer text-[#298af2]"
                      onClick={() => setSignUp(false)}
                    >
                      로그인
                    </span>
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
