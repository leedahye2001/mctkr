import React, { Component, useState } from "react";
import Footer from "../components/Footer";
import HistorySide from "../components/HistorySide";
import license2017 from "../img/2017license.png";
import license201901 from "../img/2019license01.png";
import license201902 from "../img/2019license02.png";
import license202001 from "../img/2020license01.png";
import license202002 from "../img/2020license02.png";
import license202003 from "../img/2020license03.png";
import license202004 from "../img/2020license04.png";
import license202101 from "../img/2021license01.png";
import license202102 from "../img/2021license02.png";
import license202103 from "../img/2021license03.png";
import license202201 from "../img/2022license01.png";
import license202202 from "../img/2022license02.png";
import pricegimhae from "../img/pricegimhae.png";
import centralprice01 from "../img/centralprice01.png";
import centralprice02 from "../img/centralprice02.png";
import centralprice03 from "../img/centralprice03.png";
import mcthelp from "../img/Help.png";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import { Link } from "react-router-dom";
import Dropdown from "../components/Dropdown";
import "../components/Dropdown.css";

const License = (props) => {
  // const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

  return (
    <div>
      <div className="relative">
        <div>
          <img
            src={mcthelp}
            className="object-cover h-[500px] w-full"
            alt="help"
          />
        </div>
        <div className="bg-black w-full h-auto text-center">
          <p
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 
          font-black text-5xl text-[#333]"
          >
            LICENSE
            <div className="flex justify-center">
              <hr className="mt-5 mb-10 h-px border-2 w-1/3 bg-black border-black" />
            </div>
            <span className="text-4xl">특허 및 인증현황</span>
          </p>
        </div>

        <div className="flex flex-rows-1 pl-10 pt-10 sm:pt-20 md:pt-20 pb-10 sm:pb-20 md:pb-20 w-full bg-white">
          <span className="font-bold">홈</span>
          <div className="pl-2"></div>
          <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
          <div className="pl-2"></div>
          <span className="font-bold">COMPANY</span>
          <div className="pl-2"></div>
          <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
          <div className="pl-2"></div>
          <span className="font-bold">특허 및 인증현황</span>
        </div>
      </div>
      <div className="flex flex-rows-1">
        <div className="px-10 sm:px-10 w-full h-full">
          {/* top */}
          <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
            특허 및 인증서
          </span>
          <br />
          <div className="pt-10"></div>
          <span className="text-black text-xl sm:text-2xl font-semibold">
            우수한 기술력과 신뢰,
          </span>

          <br />
          <br />
          <span className="text-[#000] text-base sm:text-2xl font-light">
            “MCT는
            <span className="font-bold"> 최고의 품질과 최상의 서비스</span>를
            제공하도록 최선을 다합니다.”
          </span>

          {/* Main contect */}

          <div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center py-20"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license201901} w-full alt="파이프 버 제거장치" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                파이프 버 제거장치
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202101} w-full alt="절삭유 회전방사 유도장치" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                절삭유 회전방사 유도장치
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202003} w-full alt="뿌리기업 인증" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                뿌리기업 인증
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license201902} w-full alt="IATF 16949" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                IATF 16949
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202001} w-full alt="IATF 16949" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                ISO 14001
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202004} w-full alt="ISO 9001" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                ISO 9001
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202201} w-full alt="기업부설연구소" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                기업부설연구소
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license2017} w-full alt="경영혁신형 중소기업" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                경영혁신형 중소기업
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202103} w-full alt="기술혁신형 중소기업" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                기술혁신형 중소기업
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202002} w-full alt="벤처기업 인증" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                벤처기업 인증
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img
                src={license202102}
                w-full
                alt="위험성 평가 우수사업장 인증"
              />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                위험성 평가 우수사업장 인증
              </p>
            </div>
            <div
              className="-mt-2"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <img src={license202202} w-full alt="소부장 전문기업 확인" />
              <p className="text-center pt-3 font-semibold text-xs sm:text-lg lg:text-xl">
                소부장 전문기업 확인
              </p>
            </div>
          </div>
          <hr class="my-20 h-px bg-gray-200 border-0"></hr>

          {/* 수상실적 */}
          <span
            className="text-black text-3xl sm:text-4xl font-black"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            수상실적
          </span>
          <br />

          <div
            className="justify-items-center py-10"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <p className="text-first pt-3 font-semibold text-sm sm:text-lg lg:text-xl pb-5">
                ▶ 정부기관 수상 (자랑스러운 CEO - 김해시장 표창)
              </p>
              <img
                src={pricegimhae}
                className="w-full sm:w-1/2 lg:w-1/3 justify-items-center"
                alt="정부기관 수상 (자랑스러운 CEO - 김해시장 표창)"
              />
            </div>
            <div
              className="pt-10"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <p className="text-first pt-3 font-semibold text-sm sm:text-lg lg:text-xl pb-5">
                ▶ 센트랄 社 3개년 연속 품질우수협력사상 수상
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div>
                  <p className="text-center font-semibold">2015</p>
                  <img
                    src={centralprice01}
                    className="w-full justify-items-center"
                    alt="정부기관 수상 (자랑스러운 CEO - 김해시장 표창)"
                  />
                </div>
                <div>
                  <p className="text-center font-semibold">2016</p>
                  <img
                    src={centralprice02}
                    className="w-full justify-items-center"
                    alt="정부기관 수상 (자랑스러운 CEO - 김해시장 표창)"
                  />
                </div>
                <div>
                  <p className="text-center font-semibold">2017</p>
                  <img
                    src={centralprice03}
                    className="w-full justify-items-center"
                    alt="정부기관 수상 (자랑스러운 CEO - 김해시장 표창)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default License;
