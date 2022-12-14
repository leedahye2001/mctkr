import React, { Component } from "react";
import Ex1 from "../img/Ex1.png";
import Ex2 from "../img/Ex2.png";
import Ex3 from "../img/Ex3.png";
import Ex4 from "../img/Ex4.png";
import rightarrow from "../img/right-arrow.png";

class Explain extends Component {
  render() {
    return (
      <div>
        <div className="bg-[#f2f2f2]">
          <div
            className="
            grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2"
            // md:grid grid-rows-1"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="500"
          >
            {/* 1 */}
            <div className="xl:pl-12 mt-10 mb-5 mx-15 py-10 px-15 flex">
              <div
                className="w-4/5 md:max-h-[100%] lg:max-h-[100%] xl:max-h-[100%]
            sm:max-w-md mx-auto bg-white rounded-xl shadow-md
            overflow-hidden md:max-w-xl
            transition ease-in-out delay-150 hover:translate hover:scale-110 duration-300"
              >
                <div className="md:flex mx-0 sm:mx-3">
                  <div className="md:shrink-0 p-10 sm:p-7">
                    <img
                      className="h-full w-full object-cover md:w-52 md:h-full sm:w-full sm:h-48 "
                      src={Ex1}
                      alt="MCT ex1"
                    />
                  </div>
                  <div
                    className="p-8 pt-0 mt-3 sm:p-4 sm:pt-0
                md:pt-5 lg:pt-5 xl:pt-5"
                  >
                    <div className="border-4 border-white"></div>
                    <h1
                      className="block mt-1 text-center sm:text-center md:text-left lg:text-left xl:text-left
                    text-2xl font-bold leading-tight font-medium text-black "
                    >
                      MCT
                    </h1>
                    <p className="mt-4 text-slate-500 text-center sm:text-center md:text-left lg:text-left xl:text-left">
                      MCT는
                      <br />
                      자동차 부품을 생산하는
                      <br />
                      자동차 부품 전문회사입니다.
                    </p>
                    <div className="py-5 flex ml-0 justify-center md:justify-start">
                      <div className="flex justify-center md:justify-end md:pr-2">
                        <a href="/introduce">
                          <button
                            className="bg-black border-2 border-black hover:bg-white
                            hover:border-2 hover:border-black hover:text-black text-white
                            font-bold py-3 px-4 rounded-full inline-flex"
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2 */}
            <div className="xl:pr-12 mt-10 mb-5 mx-15 py-10 px-15 flex justify-end">
              <div
                class="w-4/5 md:max-h-[100%] lg:max-h-[100%] xl:max-h-[100%]
            sm:max-w-md mx-auto bg-white rounded-xl shadow-md
            overflow-hidden md:max-w-xl
            transition ease-in-out delay-150 hover:translate hover:scale-110 duration-300"
              >
                <div class="md:flex mx-0 sm:mx-3">
                  <div class="md:shrink-0 p-10 sm:p-7">
                    <img
                      class="h-full w-full object-cover md:w-52 md:h-full sm:w-full sm:h-48 "
                      src={Ex2}
                      alt="MCT explain2"
                    />
                  </div>
                  <div
                    class="p-8 pt-0 mt-3 sm:p-4 sm:pt-0
                md:pt-5 lg:pt-5"
                  >
                    <div className="border-4 border-white"></div>
                    <h1
                      class="block mt-1 text-center sm:text-center md:text-left lg:text-left xl:text-left
                    text-2xl font-bold leading-tight font-medium text-black "
                    >
                      고객 만족 기업
                    </h1>
                    <p class="mt-4 text-slate-500 text-center sm:text-center md:text-left lg:text-left xl:text-left">
                      품질보증시스템을 갖추어
                      <br />
                      고객이 만족하는 기업의 역할을
                      <br />
                      다하겠습니다.
                    </p>
                    <div className="py-5 flex ml-0 justify-center md:justify-start">
                      <div className="flex justify-center md:justify-end md:pr-2">
                        <a href="/license">
                          <button
                            className="bg-black border-2 border-black hover:bg-white
                            hover:border-2 hover:border-black hover:text-black text-white
                            font-bold py-3 px-4 rounded-full inline-flex"
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 */}
            <div className="xl:pl-12 mt-10 mb-5 mx-15 py-10 px-15 flex">
              <div
                className="w-4/5 md:max-h-[100%] lg:max-h-[100%] xl:max-h-[100%]
            sm:max-w-md mx-auto bg-white rounded-xl shadow-md
            overflow-hidden md:max-w-xl
            transition ease-in-out delay-150 hover:translate hover:scale-110 duration-300"
              >
                <div className="md:flex mx-0 sm:mx-3">
                  <div className="md:shrink-0 p-10 sm:p-7">
                    <img
                      className="h-full w-full object-cover md:w-60 md:h-full sm:w-full sm:h-48 "
                      src={Ex3}
                      alt="MCT explain3"
                    />
                  </div>
                  <div
                    className="p-8 pt-0 mt-3 sm:p-4 sm:pt-0
                md:pt-5 lg:pt-5 xl:pt-5"
                  >
                    <div className="border-4 border-white"></div>
                    <h1
                      className="block mt-1 text-center sm:text-center md:text-left lg:text-left xl:text-left
                    text-2xl font-bold leading-tight font-medium text-black "
                    >
                      PRODUCT
                    </h1>
                    <p className="mt-4 text-slate-500 text-center sm:text-center md:text-left lg:text-left xl:text-left">
                      특허등록 생산제품 외 다양한 생산설비와
                      <br />
                      측정검사설비 등 최고의 제품들이
                      <br />
                      갖추어져있습니다.
                    </p>
                    <div className="py-5 flex ml-0 justify-center md:justify-start">
                      <div className="flex justify-center md:justify-end md:pr-2">
                        <a href="/productintro">
                          <button
                            className="bg-black border-2 border-black hover:bg-white
                            hover:border-2 hover:border-black hover:text-black text-white
                            font-bold py-3 px-4 rounded-full inline-flex"
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
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 */}
            <div
              className="xl:pr-12 mt-10 mb-10 mx-15 py-10 px-15 flex justify-end"
              // data-aos="fade-up"
              // data-aos-easing="ease-out-cubic"
              // data-aos-duration="500"
            >
              <div
                class="w-4/5 md:max-h-[100%] lg:max-h-[100%] xl:max-h-[100%]
            sm:max-w-md mx-auto bg-white rounded-xl shadow-md
            overflow-hidden md:max-w-xl
            transition ease-in-out delay-150 hover:translate hover:scale-110 duration-300"
              >
                <div class="md:flex mx-0 sm:mx-3">
                  <div class="md:shrink-0 p-10 sm:p-7">
                    <img
                      class="h-full w-full object-cover md:w-52 md:h-full sm:w-full sm:h-48 "
                      src={Ex4}
                      alt="MCT explain4"
                    />
                  </div>
                  <div
                    class="p-8 pt-0 mt-3 sm:p-4 sm:pt-0
                md:pt-5 lg:pt-5 xl:pt-5"
                  >
                    <div className="border-4 border-white"></div>
                    <h1
                      class="block mt-1 text-center sm:text-center md:text-left lg:text-left xl:text-left
                    text-2xl font-bold leading-tight font-medium text-black "
                    >
                      충분한 경쟁력의
                      <br /> GLOBAL 전문 업체
                    </h1>
                    <p class="mt-4 text-slate-500 text-center sm:text-center md:text-left lg:text-left xl:text-left">
                      국내를 넘어 전 세계를 향해 나아가는
                      <br />
                      세계적 자동차 부품 생산 전문 기업으로
                      <br />
                      성장합니다.
                    </p>
                    <div className="py-5 flex ml-0 justify-center md:justify-start">
                      <div className="flex justify-center md:justify-end md:pr-2">
                        <a href="/majorcustomer">
                          <button
                            className="bg-black border-2 border-black hover:bg-white
                            hover:border-2 hover:border-black hover:text-black text-white
                            font-bold py-3 px-4 rounded-full inline-flex"
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
                        </a>
                      </div>
                    </div>
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
