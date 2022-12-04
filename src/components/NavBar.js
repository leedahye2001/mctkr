import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/mct_logo.jpeg";
import NavLinks from "./NavLinks";

const NavBar = ({ active, setActive, user, handleLogout }) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const userId = user?.uid;
  console.log("userId", userId);
  console.log("name", user?.displayName);

  return (
    <nav className="top-0 sticky bg-white shadow-none lg:shadow-md py-2 z-[100]">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 lg:w-auto w-full top-0 flex justify-between shadow-none">
          <Link to="/">
            <img
              src={Logo}
              className="h-7 sm:h-11 cursor-pointer"
              alt="mct Logo"
            />
          </Link>

          <div
            className="text-3xl lg:hidden align-center p-1 sm:p-3"
            onClick={handleClick}
          >
            {click ? (
              <FaTimes
                className="hover:cursor-pointer"
                size={22}
                style={{ color: "#000" }}
              />
            ) : (
              <FaBars
                className="hover:cursor-pointer"
                size={22}
                tyle={{ color: "#000" }}
              />
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
                  <div className="flex cols-2 text-center">
                    <p className="px-4 py-2 mt-6">{user?.displayName} 님</p>
                    <div className="grid grid-cols justify-items-center">
                      <li
                        className="bg-[#a4a4a4] text-white rounded-full font-normal text-base
                  px-3 py-2 hover:bg-[#D9D9D9] hover:text-white hover:cursor-pointer"
                        onClick={handleLogout}
                      >
                        로그아웃
                      </li>
                      <Link to="/addnews">
                        <li
                          className={`${
                            active === "news" ? "active" : ""
                          } text-blue-700`}
                          onClick={() => setActive("news")}
                        >
                          보도자료 추가
                        </li>
                      </Link>
                      <Link to="/addnotice">
                        <li
                          className={`${
                            active === "notice" ? "active" : ""
                          } text-red-600`}
                          onClick={() => setActive("notice")}
                        >
                          공지사항 추가
                        </li>
                      </Link>
                    </div>
                  </div>
                </>
              ) : (
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <li
                    className={`border-2 border-black bg-black text-white rounded-full
                  px-4 py-2 hover:bg-white hover:text-black 
                    ${active === "login" ? "active" : ""}`}
                    onClick={() => setActive("login")}
                  >
                    로그인
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
                    <div className="flex cols-2 text-center">
                      <p className="px-4 py-2 mt-3">{user?.displayName} 님</p>
                      <div className="grid grid-cols justify-items-center">
                        <li
                          className="bg-[#a4a4a4] text-white rounded-full font-normal text-base
                  px-3 py-2 hover:bg-[#D9D9D9] hover:text-white hover:cursor-pointer"
                          onClick={handleLogout}
                        >
                          로그아웃
                        </li>
                        <Link to="/addnews">
                          <li
                            className={`${
                              active === "news" ? "active" : ""
                            } text-blue-600`}
                            onClick={() => setActive("news")}
                          >
                            보도자료 추가
                          </li>
                        </Link>
                        <Link to="/addnotice">
                          <li
                            className={`${
                              active === "notice" ? "active" : ""
                            } text-blue-600`}
                            onClick={() => setActive("notice")}
                          >
                            공지사항 추가
                          </li>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (
                  <a href="/login" style={{ textDecoration: "none" }}>
                    <li
                      className={`border-2 border-black bg-black text-white rounded-full
                  px-4 py-2 hover:bg-white hover:text-black 
                    ${active === "login" ? "active" : ""}`}
                      onClick={() => setActive("login")}
                    >
                      로그인
                    </li>
                  </a>
                )}
              </ul>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
