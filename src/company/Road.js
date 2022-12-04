import { Component } from "react";
import Footer from "../components/Footer";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import company from "../img/free-icon-company-3719447.png";
import call from "../img/free-icon-telephone-159844.png";
import fax from "../img/fax.png";
import email from "../img/email.png";
import Map from "./Map";
import { FaXRay } from "react-icons/fa";

class Road extends Component {
  render() {
    return (
      <div>
        {/* 맨위에 */}
        <div>
          <div className="flex flex-rows-1 pl-10 pt-10 sm:pt-20 md:pt-20 pb-10 sm:pb-20 md:pb-20 w-full bg-white">
            <span className="font-bold">홈</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">COMPANY</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">오시는 길</span>
          </div>
        </div>

        <div className="flex flex-rows-1">
          <div className="px-10 sm:px-20 w-full h-full">
            <p className="text-black text-3xl sm:text-4xl font-black pr-5">
              오시는 길
            </p>
            <br />
            <div className="pt-10"></div>
            <span className="text-black text-xl sm:text-2xl font-semibold">
              MCT 본사에 오시는 길을 소개합니다 :)
            </span>
            <br />
            <br />
            <span className="text-gray-600 text-lg sm:text-2xl font-semibold">
              “방문 시 미리 연락 주시면 안내해드리겠습니다.”
            </span>

            {/* Map */}
            <div className="w-full py-20">
              <Map />
            </div>
            <div className="pb-20">
              <div className="grid grid-rows-2">
                <div className="flex cols-2">
                  <img
                    src={company}
                    className="w-10 h-10 sm:w-14 sm:h-14"
                    alt="company"
                  />
                  <p className="m-2 sm:m-3 sm:m-4 font-semibold sm:text-2xl text-xl">
                    회사주소
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] text-xs sm:text-base">
                    경상남도 김해시 진례면 테크노밸리로 193-29 (진례면 고모리)
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-2">
                <div className="flex cols-2 gap-1">
                  <img
                    src={call}
                    className="w-9 h-9 sm:w-12 sm:h-12"
                    alt="call"
                  />
                  <p className="m-2 sm:m-3 sm:m-4 font-semibold sm:text-2xl text-xl">
                    연락처
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] text-xs sm:text-base">
                    055-343-9322~1
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-2">
                <div className="flex cols-2 gap-1">
                  <img
                    src={fax}
                    className="w-9 h-9 sm:w-14 sm:h-14"
                    alt="fax"
                  />
                  <p className="m-2 sm:m-3 sm:m-4 font-semibold sm:text-2xl text-xl">
                    FAX
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] text-xs sm:text-base">
                    팩스번호 : 055-343-9585
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-2">
                <div className="flex cols-2 gap-1">
                  <img
                    src={email}
                    className="w-9 h-8 sm:w-14 sm:h-12 mt-1 sm:mt-2"
                    alt="email"
                  />
                  <p className="m-2 sm:m-3 sm:m-4 font-semibold sm:text-2xl text-xl">
                    Email
                  </p>
                </div>
                <div>
                  <p className="font-semibold text-[#333333] text-xs sm:text-base">
                    이메일 : mct@mctkr.com
                  </p>
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

export default Road;
