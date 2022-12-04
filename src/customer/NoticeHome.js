import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { excerpt } from "../utility";

import { Collapse } from "antd";

const { Panel } = Collapse;

const NoticeHome = ({ notice, user, handleDelete }) => {
  const userId = user?.uid;

  return (
    <div className="mx-10">
      <Link to="/notice">
        <div className="mt-10 mb-5 mx-10">
          <span className="text-black text-2xl sm:text-3xl font-black sm:font-black">
            공지사항
          </span>
        </div>
      </Link>
      <div>
        <div className="mt-10 mb-5 mx-10">
          {notice?.map((item) => (
            <div>
              <Collapse bordered={false}>
                <Panel className="font-semibold" header={item.title}>
                  <div key={item.id}>
                    <span>
                      <p>
                        {item.author} -&nbsp;
                        <span className="font-normal">
                          {item.timestamp.toDate().toDateString()}
                        </span>
                      </p>
                      <div>
                        <div className="mt-5 font-normal text-[#666]">
                          {item.description}
                        </div>
                      </div>
                    </span>
                    <div className="mt-5 relative">
                      {user?.uid && item.userId === user.uid && (
                        <div className="absolute bottom-0 right-0 grid grid-cols-2 gap-2 ">
                          <Link to={`/updatenotice/${item.id}`}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="w-6 h-6 text-[#666] hover:cursor-pointer"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                              />
                            </svg>
                          </Link>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-red-600 hover:cursor-pointer"
                            onClick={() => handleDelete(item.id)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                            />
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                </Panel>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoticeHome;
