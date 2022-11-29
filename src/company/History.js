import { Component } from "react";
import Footer from "../components/Footer";
import HistorySide from "../components/HistorySide";
import license2017 from "../img/2017license.png";
import license201901 from "../img/2019license01.png";
import license201902 from "../img/2019license02.png";
import license202001 from "../img/2020license01.png";
import license202002 from "../img/2020license02.png";
import license202003 from "../img/2020license03.png";
import license202101 from "../img/2021license01.png";
import license202102 from "../img/2021license02.png";
import license202103 from "../img/2021license03.png";
import license202201 from "../img/2022license01.png";
import license202202 from "../img/2022license02.png";

class History extends Component {
  render() {
    return (
      <div>
        <HistorySide />
        <div className="flex flex-rows-1 ">
          {/* left sidemenu */}
          {/* <div
            className="invisible sm:invisible md:visible lg:visible xl:visible
                      pl-10 sm:pl-10 md:w-[400px] w-0 lg:w-70 sm:w-0
                      h-[400px] sticky top-40 text-blue-900"
          >
            <span className="text-2xl font-bold">COMPANY</span>
            <hr class="w-[120px] border-2 border-blue-900"></hr>
            <br />
            <br />
            <a href="/introduce">
              <span className="text-gray-400 text-xl hover:text-blue-900 transition duration-500 ease-in-out">
                회사소개
              </span>
            </a>
            <br />
            <br />
            <a href="/history">
              <span className="text-xl font-base">회사연혁</span>
            </a>
            <br />
            <br />
            <a href="/license">
              <span className="text-gray-400 text-xl hover:text-blue-900 transition duration-500 ease-in-out">
                특허 및 인증현황
              </span>
            </a>
            <br />
            <br />
            <a href="/road">
              <span className="text-gray-400 text-xl hover:text-blue-900 transition duration-500 ease-in-out">
                오시는 길
              </span>
            </a>
          </div> */}

          <div className="px-10 sm:px-10 w-full h-full">
            <p className="text-black text-3xl sm:text-4xl font-black pr-5">
              회사연혁
            </p>

            <br />
            <div className="pt-10"></div>
            <span className="text-black text-xl sm:text-2xl font-semibold">
              열정과 도전의 여정,
            </span>

            <br />
            <br />
            <span className="text-gray-600 text-lg sm:text-2xl font-semibold">
              "창업부터 현재까지 MCT의 역사를 소개합니다.”
            </span>

            {/* Main contect */}
            <div
              className="px-0 flex gap-8 justify-items-center py-20"
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {/* left */}
              <div>
                <div
                  className="-mt-2"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p className="text-end font-semibold text-2xl sm:text-3xl text-[#11264F] ">
                    2000
                  </p>
                  <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                  <p className="text-end text-sm sm:text-base text-neutral-600">
                    성진테크[SUNGJIN TECH] 회사 설립
                  </p>
                  <div
                    className="mt-[170px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <p className="text-end font-semibold text-2xl sm:text-3xl text-[#11264F] ">
                      2009
                    </p>
                    <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                    <p className="text-end text-sm sm:text-base text-neutral-600">
                      ISO 9001 인증 센트랄 협력 업체 등록
                    </p>
                  </div>
                  <div
                    className="mt-[170px] md:mt-[220px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <p className="text-end font-semibold text-2xl sm:text-3xl text-[#11264F] ">
                      2016
                    </p>
                    <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                    <p className="text-end text-sm sm:text-base text-neutral-600">
                      연구개발 전담 부서 인증
                    </p>
                  </div>
                  <div
                    className="mt-[410px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <p className="text-end font-semibold text-2xl sm:text-3xl text-[#11264F] ">
                      2019
                    </p>
                    <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                    <p className="text-end text-sm sm:text-base text-neutral-600">
                      - 파이프 퍼(Burr) 제거 장치 특허 등록
                      <br />- IATF 16949 인증
                    </p>
                    <br />
                    <div className="justify-items-end grid grid-cols-2 gap-3">
                      <img
                        src={license201901}
                        className="w-full sm:w-40"
                        alt="license201901"
                      />
                      <img
                        src={license201902}
                        className="w-full sm:w-40"
                        alt="license201902"
                      />
                    </div>
                  </div>
                  <div
                    className="mt-[410px] md:mt-[330px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <p className="text-end font-semibold text-2xl sm:text-3xl text-[#11264F] ">
                      2021
                    </p>
                    <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                    <p className="text-end text-sm sm:text-base text-neutral-600">
                      - 척 설치 버 제거용 절삭유 공급 회전방사 유도장치 특허등록
                      <br />- 위험성 평가 우수사업장 인증
                      <br />- 기술혁신형 중소기업 인증
                    </p>
                    <br />
                    <div className="grid grid-cols-3 gap-3 justify-items-end">
                      <img
                        src={license202101}
                        className="w-full sm:w-40"
                        alt="license202101"
                      />
                      <img
                        src={license202102}
                        className="w-full sm:w-40"
                        alt="license202102"
                      />
                      <img
                        src={license202103}
                        className="w-full sm:w-40"
                        alt="license202103"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* line */}
              <div>
                <div className="visible flex flex-col w-0 h-[2800px] border-2 border-[#A0A8B9]">
                  <div
                    className="-mt-1 w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-40 w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[100px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[100px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-40 w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[70px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[400px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[400px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[290px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                  <div
                    className="mt-[370px] w-4 h-4 rounded-full bg-[#496499] -ml-[8px]"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  ></div>
                </div>
              </div>

              {/* right */}
              <div>
                <div
                  className="mt-[170px]"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p className="text-first font-semibold text-2xl sm:text-3xl text-[#11264F]">
                    2005
                  </p>
                  <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                  <p className="text-sm sm:text-base text-neutral-600">
                    현대, 기아, GM 자동차 조향장치 개발 및 양산
                  </p>
                </div>
                <div
                  className="mt-[110px] md:mt-[130px]"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p className="text-first font-semibold text-2xl sm:text-3xl text-[#11264F]">
                    2012
                  </p>
                  <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                  <p className="text-sm sm:text-base text-neutral-600">
                    - (주)엠씨티로 법인전환
                    <br />- TS 16949 인증
                  </p>
                </div>
                <div
                  className="mt-[140px]"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p className="text-first font-semibold text-2xl sm:text-3xl text-[#11264F]">
                    2017
                  </p>
                  <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                  <p className="text-sm sm:text-base text-neutral-600">
                    - 경영혁신형 중소기업 인증
                    <br />- 테슬라 조향장치 개발
                  </p>
                  <br />
                  <img src={license2017} className="w-40" alt="license2017" />
                </div>
                <div
                  className="mt-[440px]"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p className="text-first font-semibold text-2xl sm:text-3xl text-[#11264F]">
                    2020
                  </p>
                  <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                  <p className="text-sm sm:text-base text-neutral-600">
                    - ISO 14001 인증
                    <br />- 벤처기업 인증
                    <br />- 소둔 열처리 뿌리기업 인증
                  </p>
                  <br />
                  <div className="grid grid-cols-3 gap-3">
                    <img
                      src={license202001}
                      className="w-full sm:w-40"
                      alt="license202001"
                    />
                    <img
                      src={license202002}
                      className="w-full sm:w-40"
                      alt="license202002"
                    />
                    <img
                      src={license202003}
                      className="w-full sm:w-40"
                      alt="license202003"
                    />
                  </div>
                </div>
                <div
                  className="mt-[440px] md:mt-[370px] lg:mt-[300px]"
                  data-aos="fade-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <p className="text-first font-semibold text-2xl sm:text-3xl text-[#11264F]">
                    2022
                  </p>
                  <div className="my-4 border-[2px] border-neutral-300 w-full"></div>
                  <p className="text-sm sm:text-base text-neutral-600">
                    - 소재 · 부품 · 장비 전문기업 인증
                    <br />- 부설연구소 인증
                  </p>
                  <br />
                  <div className="justify-items-end grid grid-cols-2 gap-3">
                    <img
                      src={license202201}
                      className="w-full sm:w-40"
                      alt="license202201"
                    />
                    <img
                      src={license202202}
                      className="w-full sm:w-40"
                      alt="license202202"
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
  }
}

export default History;
