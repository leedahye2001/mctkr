import { Component } from "react";
import Footer from "../components/Footer";
import measure01 from "../img/measure01.png";
import measure02 from "../img/measure02.png";
import measure03 from "../img/measure03.png";
import measure04 from "../img/measure04.png";
import measure05 from "../img/measure05.png";

class MeasurementFacility extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-rows-1 pb-20">
          <div className="px-10 sm:px-20 w-full h-full">
            {/* top */}
            <div>
              <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
                측정검사설비
              </span>
              <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
              <span className="text-[#000] text-base sm:text-2xl font-light">
                “MCT의&nbsp;
                <span className="font-bold">측정검사설비</span>를 소개합니다.”
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
                        src={measure01}
                        className="w-full"
                        alt="삼차원 측정기 (HEXAGON)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        삼차원 측정기
                        <br /> (HEXAGON)
                      </p>
                    </div>
                  </div>
                </div>
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
                        src={measure02}
                        className="w-full"
                        alt="투영기 (MITUTOYO)"
                      />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        투영기
                        <br /> (MITUTOYO)
                      </p>
                    </div>
                  </div>
                </div>
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
                      <div className="py-10">
                        <img
                          src={measure03}
                          className="w-full"
                          alt="형상 측정기 MITUTOYO)"
                        />
                      </div>
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        형상 측정기
                        <br /> (MITUTOYO)
                      </p>
                    </div>
                  </div>
                </div>
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
                      <div className="pt-0 md:pt-[20px] lg:pb-[85px] pb-0 md:pb-0 lg:pt-20">
                        <img
                          src={measure04}
                          className="w-full"
                          alt="조도측정기 (MITUTOYO)"
                        />
                      </div>
                      <p className="text-center pt-5 md:pt-0 lg:pt-0 xl:pt-10 font-semibold text-xs sm:text-lg lg:text-xl">
                        조도측정기
                        <br /> (MITUTOYO)
                      </p>
                    </div>
                  </div>
                </div>
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
                        src={measure05}
                        className="w-full"
                        alt="경도 측정기 (MISAWA SEIKI)"
                      />
                      <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                        경도 측정기
                        <br />
                        (MISAWA SEIKI)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default MeasurementFacility;
