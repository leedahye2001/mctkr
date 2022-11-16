import React, { Component } from "react";
import Ex1 from "../img/Ex1.png";
import Ex2 from "../img/Ex2.png";
import Ex3 from "../img/Ex3.png";
import Ex4 from "../img/Ex4.png";
import rightarrow from "../img/right-arrow.png";
import "./Explain.scss";

class Explain extends Component {
  render() {
    return (
      <div>
        {/* <div className="Background"></div> */}
        {/* 1 */}
        <div className="pt-20 pb-10">
          <div
            class="border-4 border-white ml-20
         bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div class="px-3 border-4 border-white md:flex h-56 grid grid-cols-2 gap-auto content-around ...">
              <div class="border-4 border-white md:shrink-0 p-2">
                <img
                  class="h-48 w-full object-cover sw:h-full sw:w-48"
                  src={Ex1}
                  alt="MCT explain 1"
                />
              </div>
              {/* <div class="pl-7"> */}
              <div class="pb-0">
                <div className="pt-5 h-40 px-8 border-4 border-white">
                  <div className="pt-2 border-4 border-white uppercase tracking-wide text-2xl text-black font-bold">
                    MCT
                  </div>
                  <div className="border-4 border-white">
                    <p class="mt-2 text-slate-500">
                      MCT는
                      <br />
                      자동차 부품을 생산하는
                      <br />
                      자동차 부품 전문회사입니다.
                    </p>
                  </div>
                </div>
                <div className="buttoninner1">
                  <div className="py-0 px-3">
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

        {/* 2 */}
        <div className="border-4 border-black pt-10 pb-10">
          <div
            class="border-4 border-white pt-10 pb-10
         bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div class="px-3 border-4 border-white md:flex h-56 grid grid-cols-2 gap-auto content-around ...">
              <div class="border-4 border-white md:shrink-0 p-2">
                <img
                  class="h-48 w-full object-cover sw:h-full sw:w-48"
                  src={Ex2}
                  alt="MCT explain 2"
                />
              </div>
              {/* <div class="pl-7"> */}
              <div class="pb-0">
                <div className="pt-5 h-40 px-8 border-4 border-white">
                  <div className="pt-2 border-4 border-white uppercase tracking-wide text-2xl text-black font-bold">
                    고객 만족 기업
                  </div>
                  <div className="border-4 border-white">
                    <p class="mt-2 text-slate-500">
                      품질보증시스템을 갖추어
                      <br />
                      고객이 만족하는 기업의 역할을
                      <br />
                      다하겠습니다.
                    </p>
                  </div>
                </div>
                <div className="buttoninner1">
                  <div className="py-0 px-3">
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

        {/* 3 */}
        <div className="pt-10 pb-10">
          <div
            class="border-4 border-white mx-20
         bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div class="px-3 border-4 border-white md:flex h-56 grid grid-cols-2 gap-auto content-around ...">
              <div class="border-4 border-white md:shrink-0 p-2">
                <img
                  class="h-48 w-full object-cover sw:h-full sw:w-48"
                  src={Ex3}
                  alt="MCT explain 3"
                />
              </div>
              {/* <div class="pl-7"> */}
              <div class="pb-0">
                <div className="pt-5 h-40 px-8 border-4 border-white">
                  <div className="pt-2 border-4 border-white uppercase tracking-wide text-2xl text-black font-bold">
                    PRODUCT
                  </div>
                  <div className="border-4 border-white">
                    <p class="mt-2 text-slate-500">
                      특허등록 생산제품 외 다양한 생산설비와
                      <br />
                      측정검사설비 등 최고의 제품들이
                      <br />
                      갖추어져있습니다.
                    </p>
                  </div>
                </div>
                <div className="buttoninner1">
                  <div className="py-0 px-3">
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

        {/* 4 */}
        <div className="pt-10 pb-10">
          <div
            class="border-4 border-white mx-auto
         bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl"
          >
            <div class="px-3 border-4 border-white md:flex h-56 grid grid-cols-2 gap-auto content-around ...">
              <div class="border-4 border-white md:shrink-0 p-2">
                <img
                  class="h-48 w-full object-cover sw:h-full sw:w-48"
                  src={Ex4}
                  alt="MCT explain 4"
                />
              </div>
              {/* <div class="pl-7"> */}
              <div class="flex flex-col space-y-3">
                <div className="h-40 px-8 border-4 border-white">
                  <div className="pt-2 border-4 border-white uppercase tracking-wide text-2xl text-black font-bold">
                    충분한 경쟁력의
                    <br />
                    Global 전문 업체
                  </div>
                  <div className="border-4 border-white">
                    <p class="mt-2 text-slate-500">
                      국내를 넘어 전 세계를 향해 나아가는
                      <br />
                      세계적 자동차 부품 생산 전문 기업으로
                      <br />
                      성장합니다.
                    </p>
                  </div>
                </div>
                <div className="buttoninner">
                  <div className="py-0 px-3">
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
      </div>
    );
  }
}

export default Explain;
