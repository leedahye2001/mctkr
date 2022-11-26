import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/mct_logo.jpeg";
import "./NavbarStyles.scss";
import NavLinks from "./NavLinks";
import Button from "./Button";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 lg:w-auto w-full flex justify-between">
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
          <Button />
        </div>
        {/* mobile */}
        <ul
          className={`
        lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-10
        duration-500 ${click ? "left-0" : "left-[-100%]"}
        `}
        >
          <NavLinks />
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
