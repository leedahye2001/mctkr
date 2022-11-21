import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/mct_logo.jpeg";
import classNames from "classnames";

const NavBar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div>
      <nav className="bg-white p-6 sticky top-0 z-50 shadow-md">
        <div className="max-w-6xl mx-auto px-1">
          <div className="flex justify-between">
            {/* 메뉴 */}
            <div className="flex space-x-4">
              <div class="flex items-center flex-shrink-0 text-white md:mr-3 lg:mr-[12rem]">
                <Link to="/" className="flex items-center">
                  <img src={Logo} className="h-7 sm:h-11" alt="mct Logo" />
                </Link>
              </div>
              <div className="hidden md:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-5 text-gray-700 hover:text-gray-900"
                >
                  COMPANY
                </a>

                <a
                  href="#"
                  className="py-5 px-5 text-gray-700 hover:text-gray-900"
                >
                  BUSINESS
                </a>

                <a
                  href="#"
                  className="py-5 px-5 text-gray-700 hover:text-gray-900"
                >
                  PRODUCT
                </a>

                <a
                  href="#"
                  className="py-5 px-5 text-gray-700 hover:text-gray-900"
                >
                  CUSTOMER
                </a>

                <a
                  href="#"
                  className="py-5 px-5 text-gray-700 hover:text-gray-900"
                >
                  CONTACT
                </a>
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
              <button>
                <a
                  href="#"
                  className="w-full block py-2 px-4 text-md hover:bg-gray-200"
                >
                  COMPANY
                </a>
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

      {/* <div class="w-full max-w-screen-sm hidden lg:block bg-white border rounded-lg shadow-sm overflow-hidden -mt-4 mx-auto">
        <div class="grid grid-cols-1 gap-8 m-6 mb-10"> */}
      {/* <!-- link - start --> */}
      {/* <a href="/" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Growth</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a> */}
      {/* <!-- link - end --> */}
      {/* <!-- link - start --> */}
      {/* <a href="#" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Security</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a> */}
      {/* <!-- link - end --> */}
      {/* <!-- link - start --> */}
      {/* <a href="#" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Cloud</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a> */}
      {/* <!-- link - end --> */}
      {/* <!-- link - start --> */}
      {/* <a href="#" class="group flex gap-4">
            <div>
              <div class="font-semibold mb-1">Analytics</div>
              <p class="text-sm text-gray-500">
                This is a section of some simple filler text, also known as
                placeholder text.
              </p>
            </div>
          </a> */}
      {/* <!-- link - end --> */}
      {/* </div>
      </div> */}
    </div>
  );
};

export default NavBar;
