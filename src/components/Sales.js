import React, { Component } from "react";
import Sale from "../img/sales.png";

class Sales extends Component {
  render() {
    return (
      <div>
        <div
        // data-aos="fade-up"
        // data-aos-easing="ease-out-cubic"
        // data-aos-duration="1000"
        // class="pl-10 lg:grid grid-cols-2 gap-0 p-2 ml:grid grid-cols-2 gap-0
        // p-1 sm:grid grid-cols-2 gap-2 pt-10 pb-5"
        >
          <div className="flex -gap-[2.75rem]  grid sm:grid-cols-1 md:grid-cols-2 justify-items-center">
            {/* <div className="EntirePadding3"> */}
            <div className="m-3 ">
              <img
                className="h-50 w-full pl-0 object-cover lg:max-w-xl
                lg:h-50 lg:w-full md:w-full sm:w-full sm:pt-5"
                src={Sale}
                alt="매출액 현황"
              />
            </div>

            {/* 매출액 현황 */}
            <div>
              <div className="py-[20%] p-5">
                <div>
                  <div
                    className="sm:text-xl lg:text-3xl xl:text-4xl
                  md:text-2xl
                  text-2xl text-black font-bold"
                  >
                    매출액 현황
                  </div>
                  <div className="sm:pt-0 border-4 border-white">
                    <p class="lg:text-base mt-2 text-slate-500 sm:mt-1 sm:text-sm">
                      엠씨티는 "17년 ~ 21년 총 5년 간"
                      <br />
                      300% 이상 달성이라는 놀라운 성과로
                      <br />
                      꾸준히 성장하는 기업임을 증명합니다.
                    </p>
                  </div>
                  <div className="flex justify-center pt-4 py-0 px-3">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white
                    font-bold py-3 px-6 rounded-full inline-flex item-center"
                    >
                      <span>자세히 보기 </span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sales;
