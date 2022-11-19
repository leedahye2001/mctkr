import React, { Component } from "react";
import Sale from "../img/sales.png";

class Sales extends Component {
  render() {
    return (
      <div>
        <div class="pl-10 lg:grid grid-cols-2 gap-0 p-2 ml:grid grid-cols-2 gap-0 p-1 sm:grid grid-cols-2 gap-2 pt-10 pb-5">
          {/* <div className="EntirePadding3"> */}
          <div>
            <img
              class="h-50 w-full pl-0 object-cover lg:max-w-xl lg:h-50 lg:w-full md:w-full sm:w-full sm:pt-5"
              src={Sale}
              alt="매출액 현황"
            />
          </div>

          {/* 매출액 현황 */}
          <div>
            <div className="lg:pt-5">
              <div className="border-2 border-white pt-5 h-60 px-8 border-4 border-white">
                <div className="sm:pt-0 sm:text-xl lg:pt-5 lg:text-3xl xl:text-4xl md:text-2xl border-4 border-white uppercase tracking-wide text-2xl text-black font-bold">
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
                <div className="pl-12 pt-4 py-0 px-3">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full inline-flex item-center">
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
    );
  }
}

export default Sales;
