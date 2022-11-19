import { Component, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/mct_logo.jpeg";
import classNames from "classnames";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [smallToggle, setSmallToggle] = useState(true);

  return (
    <div>
      <nav className="bg-white p-6 sticky top-0 z-50 shadow-md">
        <div className=" max-w-6xl mx-auto px-1">
          <div className="flex justify-between">
            {/* 메뉴 */}
            <div className="flex space-x-4">
              <div class="flex items-center flex-shrink-0 text-white md:mr-3 lg:mr-[12rem]">
                <Link to="/" className="flex items-center">
                  <img src={Logo} className="h-7 sm:h-11" alt="mct Logo" />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <ul className="MainMenu">
                  <a
                    href="#"
                    className="py-5 px-5 text-gray-700 hover:text-gray-900"
                  >
                    COMPANY
                  </a>
                  <li className="SubMenu"></li>
                  <li className="SubMenu">
                    <a
                      href="#"
                      className="py-5 px-5 text-gray-700 hover:text-gray-900"
                    >
                      BUSINESS
                    </a>
                  </li>
                  <li className="SubMenu">
                    <a
                      href="#"
                      className="py-5 px-5 text-gray-700 hover:text-gray-900"
                    >
                      PRODUCT
                    </a>
                  </li>
                  <li className="SubMenu">
                    <a
                      href="#"
                      className="py-5 px-5 text-gray-700 hover:text-gray-900"
                    >
                      CUSTOMER
                    </a>
                  </li>
                  <li className="SubMenu">
                    <a
                      href="#"
                      className="py-5 px-3 text-gray-700 hover:text-gray-900"
                    >
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 메뉴2 */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href="#"
                className="py-2 px-5 bg-black hover:bg-white border-2 hover:border-black hover:border-2
              font-bold text-white hover:text-black rounded-full transition duration-300"
              >
                로그인
              </a>
            </div>

            {/* mobile menu */}

            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu items */}
        <div className={classNames("md:hidden", { hidden: !menuToggle })}>
          <div className="flex space-x-2">
            {/* <div className="p-2 bg-white mt-2"></div> */}
            <div className="border-4 border-black">
              <button onClick={() => smallToggle(!setSmallToggle)}>
                <a
                  href="#"
                  className="w-full block py-2 px-4 text-md hover:bg-gray-200"
                >
                  COMPANY
                </a>
                {smallToggle ? (
                  <div>
                    <a
                      href="#"
                      className="w-full block py-2 px-4 text-md hover:bg-gray-200"
                    >
                      회사소개
                    </a>
                  </div>
                ) : (
                  <div
                    className={classNames("hidden", { hidden: !smallToggle })}
                  />
                )}
              </button>

              <a
                href="#"
                className="w-full block py-2 px-4 text-md hover:bg-gray-200"
              >
                BUSINESS
              </a>

              <a
                href="#"
                className="w-full block py-2 px-4 text-md hover:bg-gray-200"
              >
                PRODUCT
              </a>
              <a
                href="#"
                className="w-full block py-2 px-4 text-md hover:bg-gray-200"
              >
                CUSTOMER
              </a>
              <a
                href="#"
                className="w-full block py-2 px-4 text-md hover:bg-gray-200"
              >
                CONTACT
              </a>
            </div>
            <div className="invisible ">
              <a
                href="#"
                className="w-1/5 block border-4 border-black py-2 px-4 text-md hover:bg-gray-200"
              >
                COMPANY
              </a>
              <a
                href="#"
                className="w-1/5 block py-2 px-4 text-md hover:bg-gray-200"
              >
                BUSINESS
              </a>
              <a
                href="#"
                className="w-1/5 block py-2 px-4 text-md hover:bg-gray-200"
              >
                PRODUCT
              </a>
              <a
                href="#"
                className="w-1/5 block py-2 px-4 text-md hover:bg-gray-200"
              >
                CUSTOMER
              </a>
              <a
                href="#"
                className="w-1/5 block py-2 px-4 text-md hover:bg-gray-200"
              >
                CONTACT
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div class="w-full max-w-screen-sm hidden lg:block bg-white border rounded-lg shadow-sm overflow-hidden -mt-4 mx-auto">
        <div class="grid grid-cols-1 gap-8 m-6 mb-10">
          {/* <!-- link - start --> */}
          <a href="/" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Growth</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a>
          {/* <!-- link - end --> */}
          {/* <!-- link - start --> */}
          <a href="#" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Security</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a>
          {/* <!-- link - end --> */}
          {/* <!-- link - start --> */}
          <a href="#" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Cloud</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a>
          {/* <!-- link - end --> */}
          {/* <!-- link - start --> */}
          <a href="#" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Analytics</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a>
          {/* <!-- link - end --> */}
        </div>
      </div>
    </div>

    // <div class="bg-white lg:pb-12">
    //   <div class="max-w-screen-2xl px-4 md:px-8 mx-auto">
    //     <header class="flex justify-between items-center py-4 md:py-8">
    //       {/* <!-- logo - start --> */}
    //       <a
    //         href="/"
    //         class="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
    //         aria-label="logo"
    //       >
    //         <svg
    //           width="95"
    //           height="94"
    //           viewBox="0 0 95 94"
    //           class="w-6 h-auto text-indigo-500"
    //           fill="currentColor"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path d="M96 0V47L48 94H0V47L48 0H96Z" />
    //         </svg>
    //         Flowrift
    //       </a>
    //       {/* <!-- logo - end --> */}

    //       {/* <!-- nav - start --> */}
    //       <nav class="hidden lg:flex gap-12">
    //         <a
    //           href="#"
    //           class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
    //         >
    //           Home
    //         </a>
    //         <a
    //           href="#"
    //           class="inline-flex items-center text-indigo-500 text-lg font-semibold gap-1"
    //         >
    //           Features
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             class="h-5 w-5 text-gray-800"
    //             viewBox="0 0 20 20"
    //             fill="currentColor"
    //           >
    //             <path
    //               fill-rule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clip-rule="evenodd"
    //             />
    //           </svg>
    //         </a>
    //         <a
    //           href="#"
    //           class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
    //         >
    //           Pricing
    //         </a>
    //         <a
    //           href="#"
    //           class="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100"
    //         >
    //           About
    //         </a>
    //       </nav>
    //       {/* <!-- nav - end --> */}

    //       {/* <!-- buttons - start --> */}
    //       <div class="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
    //         <a
    //           href="#"
    //           class="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3"
    //         >
    //           Sign in
    //         </a>

    //         <a
    //           href="#"
    //           class="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
    //         >
    //           Sign up
    //         </a>
    //       </div>

    //       <button
    //         type="button"
    //         class="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           class="h-6 w-6"
    //           viewBox="0 0 20 20"
    //           fill="currentColor"
    //         >
    //           <path
    //             fill-rule="evenodd"
    //             d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
    //             clip-rule="evenodd"
    //           />
    //         </svg>
    //         Menu
    //       </button>
    //       {/* <!-- buttons - end --> */}
    //     </header>

    //     {/* <!-- menu - start --> */}
    //     <div class="w-full max-w-screen-sm hidden lg:block bg-white border rounded-lg shadow-sm overflow-hidden -mt-4 mx-auto">
    //       <div class="grid grid-cols-2 gap-8 m-6 mb-10">
    //         {/* <!-- link - start --> */}
    //         {/* <a href="#" class="group flex gap-4">
    //           <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="h-6 w-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    //               />
    //             </svg>
    //           </div>

    //           <div>
    //             <div class="font-semibold mb-1">Growth</div>
    //             <p class="text-sm text-gray-500">
    //               This is a section of some simple filler text, also known as
    //               placeholder text.
    //             </p>
    //           </div>
    //         </a> */}
    //         {/* <!-- link - end --> */}

    //         {/* <!-- link - start --> */}
    //         {/* <a href="#" class="group flex gap-4">
    //           <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="h-6 w-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    //               />
    //             </svg>
    //           </div>

    //           <div>
    //             <div class="font-semibold mb-1">Security</div>
    //             <p class="text-sm text-gray-500">
    //               This is a section of some simple filler text, also known as
    //               placeholder text.
    //             </p>
    //           </div>
    //         </a> */}
    //         {/* <!-- link - end --> */}

    //         {/* <!-- link - start --> */}
    //         {/* <a href="#" class="group flex gap-4">
    //           <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="h-6 w-6"
    //               fill="none"
    //               viewBox="0 0 24 24"
    //               stroke="currentColor"
    //             >
    //               <path
    //                 stroke-linecap="round"
    //                 stroke-linejoin="round"
    //                 stroke-width="2"
    //                 d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    //               />
    //             </svg>
    //           </div>

    //           <div>
    //             <div class="font-semibold mb-1">Cloud</div>
    //             <p class="text-sm text-gray-500">
    //               This is a section of some simple filler text, also known as
    //               placeholder text.
    //             </p>
    //           </div>
    //         </a> */}
    //         {/* <!-- link - end --> */}

    //         {/* <!-- link - start --> */}
    //         {/* <a href="#" class="group flex gap-4">
    //           <div class="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center shrink-0 bg-indigo-500 group-hover:bg-indigo-600 group-active:bg-indigo-700 text-white rounded-lg shadow-lg transition duration-100">
    //             <svg
    //               xmlns="http://www.w3.org/2000/svg"
    //               class="h-5 w-5"
    //               viewBox="0 0 20 20"
    //               fill="currentColor"
    //             >
    //               <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    //             </svg>
    //           </div>

    //           <div>
    //             <div class="font-semibold mb-1">Analytics</div>
    //             <p class="text-sm text-gray-500">
    //               This is a section of some simple filler text, also known as
    //               placeholder text.
    //             </p>
    //           </div>
    //         </a> */}
    //         {/* <!-- link - end --> */}
    //       </div>

    //       {/* <!-- link - start --> */}
    //       {/* <a
    //         href="#"
    //         class="block bg-gray-50 hover:bg-gray-100 active:bg-gray-200 transition duration-100 p-4"
    //       >
    //         <div class="flex items-center gap-1.5 mb-1">
    //           <span class="font-semibold leading-none">
    //             Enterprise solutions
    //           </span>
    //           <span class="bg-indigo-100 text-indigo-800 text-xs font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
    //             New
    //           </span>
    //         </div>

    //         <p class="text-gray-500 text-sm">
    //           This is a section of some simple filler text.
    //         </p>
    //       </a> */}
    //       {/* <!-- link - end --> */}
    //     </div>
    //     {/* <!-- menu - end --> */}
    //   </div>
    // </div>
  );
};

export default NavBar;
