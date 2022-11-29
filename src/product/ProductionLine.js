import { Component } from "react";
import Footer from "../components/Footer";
import line01 from "../img/line01.png";
import line02 from "../img/line02.png";
import line03 from "../img/line03.png";
import line04 from "../img/line04.png";
import line05 from "../img/line05.png";
import line06 from "../img/line06.png";

class ProductionLine extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-rows-1 pb-40">
          <div className="px-10 sm:px-20 w-full h-full">
            {/* top */}
            <div>
              <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
                생산설비
              </span>
              <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
              <span className="text-[#000] text-base sm:text-2xl font-light">
                “MCT의&nbsp;
                <span className="font-bold">생산설비</span>를 소개합니다.”
              </span>
            </div>

            {/* main content */}
            <div className="pt-10 sm:pt-20 grid grid-cols-1 lg:grid-cols-2 md:m-0 mb-10 sm:mb-20">
              {/* 1 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-20 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div>
                    <div>
                      <img
                        src={line01}
                        className="w-full"
                        alt="CNC 선반 (50대)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        <span className="text-[#11264F]">CNC 선반</span>
                        <span className="text-[#EE3030]">(50대)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                  KIT 450–6”/8”(현대위아)
                </p>
              </div>
              {/* 2 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-20 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div>
                    <div>
                      <img
                        src={line02}
                        className="w-full"
                        alt="절단기 (13대)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        <span className="text-[#11264F]">절단기</span>
                        <span className="text-[#EE3030]">(13대)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                  TK5C-72GL(TSUNE-일본) (ф6~ ф80)
                </p>
              </div>
              {/* 3 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-20 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div>
                    <div>
                      <img
                        src={line03}
                        className="w-full"
                        alt="전용 면취기 (16대)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        <span className="text-[#11264F]">전용 면취기</span>
                        <span className="text-[#EE3030]">(16대)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                  TMB-72250외(TUSNE 외)
                </p>
              </div>
              {/* 4 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-20 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div>
                    <div>
                      <img
                        src={line04}
                        className="w-full"
                        alt="절단기 (13대)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        <span className="text-[#11264F]">유압자동면취기</span>
                        <span className="text-[#EE3030]">(5대)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                  TECH 32형 (대경오토텍)
                </p>
              </div>
              {/* 5 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-20 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div>
                    <div>
                      <img
                        src={line05}
                        className="w-full"
                        alt="3POINT자동선별기"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        <span className="text-[#11264F]">3POINT자동선별기</span>
                        <span className="text-[#EE3030]">(3대)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                  대경오토텍
                </p>
              </div>
              {/* 6 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-20 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div>
                    <div>
                      <img
                        src={line06}
                        className="w-full"
                        alt="절단기 (13대)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        <span className="text-[#11264F]">SHOT BLAST</span>
                        <span className="text-[#EE3030]">(2대)</span>
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                  APRON 500K (세영쇼트)
                </p>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default ProductionLine;
