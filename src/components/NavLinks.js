import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./MyLinks";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  return (
    <>
      {links.map((link) => (
        <div>
          <div className="border-white border-4 py-3 text-left lg:cursor-pointer group">
            <h1 className="py-2 flex justify-between items-center lg:pr-0 pr-5 cursor-pointer group">
              {link.name}
              <span className="text-xl lg:mt-1 lg:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl lg:mt-1 lg:ml-2 lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute -ml-4 top-20 hidden group-hover:lg:block hover:lg:block">
                  {/* <div className="absolute py-0">
                    <div className="w-4 h-4 left-3 absolute -mt-1 bg-white rotate-45 bg-neutral-100	"></div>
                  </div> */}
                  <div className="bg-white p-5 grid grid-cols-4 gap-10 rounded-lg shadow-md bg-white">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="text-lg font-semibold">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="text-lg font-light hover:font-normal text-gray-600 my-2.5">
                            <Link
                              to={slink.link}
                              className="hover:text-[#0369a1]"
                            >
                              {slink.name}
                            </Link>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                {/* mobile menus */}
                <div
                  className={`${
                    heading === link.name ? "lg:hidden" : "hidden"
                  }`}
                >
                  {/* sublink */}
                  {link.sublinks.map((slinks) => (
                    <div>
                      <div>
                        <h1
                          onClick={() =>
                            subHeading !== slinks.Head
                              ? setSubHeading(slinks.Head)
                              : setSubHeading("")
                          }
                          className="cursor-pointer group py-4 pl-7 font-semibold lg:pr-0 pr-5 flex justify-between
                          items-center bg-gray-100"
                        >
                          {slinks.Head}

                          <span className="text-xl lg:mt-1 lg:ml-2 inline">
                            <ion-icon
                              name={`${
                                subHeading === slinks.Head
                                  ? "chevron-up"
                                  : "chevron-down"
                              }`}
                            ></ion-icon>
                          </span>
                        </h1>
                        <div
                          className={`${
                            subHeading === slinks.Head ? "lg:hidden" : "hidden"
                          }`}
                        >
                          {slinks.sublink.map((slink) => (
                            <li className="py-3 pl-14">
                              <Link
                                to={slink.link}
                                className="hover:text-[#0369a1]"
                              >
                                {slink.name}
                              </Link>
                            </li>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
