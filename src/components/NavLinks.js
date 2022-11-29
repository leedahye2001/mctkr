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
          <div className="py-1 lg:py-6 text-left lg:cursor-pointer group">
            <h1
              className="cursor-pointer py-2 sm:pl-0 lg:pl-5 pl-5 flex justify-center items-center md:pr-0 sm:pr-0 pr-5 group text-base sm:text-xl lg:text-base
                        md:border-l-0 border-l-4 md:border-l-4 lg:border-l-0 hover:sm:border-black hover:md:bg-white hover:sm:bg-slate-200 transition duration-500 ease-in-out"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              {/* <span className="text-xl lg:mt-1 lg:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span> */}

              {/* <span className="text-xl lg:mt-1 lg:ml-2 lg:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span> */}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute -ml-4 top-20 hidden group-hover:lg:block hover:lg:block">
                  {/* <div className="absolute py-0">
                    <div className="w-4 h-4 left-3 absolute -mt-1 bg-white rotate-45 bg-neutral-100	"></div>
                  </div> */}
                  <div className="bg-white p-5 flex flex-cols-4 rounded-lg shadow-md bg-white">
                    {link.sublinks.map((mysublinks) => (
                      <div>
                        <h1 className="px-0 lg:px-10 text-lg font-semibold pb-3">
                          {mysublinks.Head}
                        </h1>
                        {mysublinks.sublink.map((slink) => (
                          <li className="px-0 lg:px-10 text-lg font-light hover:text-[#0369a1] text-neutral-400 my-2.5 transition ease-in-out duration-300">
                            <a href={slink.link} className="hover:font-normal">
                              {slink.name}
                            </a>
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
                          className="flex align-center cursor-pointer group py-3 font-semibold lg:pr-0 flex justify-center
                          items-center hover:sm:bg-slate-200 transition duration-500 ease-in-out"
                        >
                          {slinks.Head}

                          {/* <span className="text-xl lg:mt-1 lg:ml-2 inline">
                            <ion-icon
                              name={`${
                                subHeading === slinks.Head
                                  ? "chevron-up"
                                  : "chevron-down"
                              }`}
                            ></ion-icon>
                          </span> */}
                        </h1>
                        <div
                          className={`${
                            subHeading === slinks.Head ? "lg:hidden" : "hidden"
                          }`}
                        >
                          {slinks.sublink.map((slink) => (
                            <li className="py-2 hover:font-normal flex justify-center">
                              <a
                                href={slink.link}
                                className="font-light text-neutral-800 hover:text-blue-900"
                              >
                                {slink.name}
                              </a>
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
