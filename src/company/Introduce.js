import { Component } from "react";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import ceo from "../img/ceohello.jpeg";
import Footer from "../components/Footer";
import location from "../img/Group 98.svg";
import mct_entire1 from "../img/mct_entire1.png";
import cnc from "../img/cnc.png";

class Introduce extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-rows-1 pl-10 pt-20 pb-20 w-full bg-white">
          <span className="font-bold">홈</span>
          <div className="pl-2"></div>
          <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
          <div className="pl-2"></div>
          <span className="font-bold">COMPANY</span>
          <div className="pl-2"></div>
          <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
          <div className="pl-2"></div>
          <span className="font-bold">회사소개</span>
        </div>

        {/* left sidemenu */}
        <div className="flex flex-rows-1 ">
          <div
            className="invisible sm:invisible md:invisible lg:invisible xl:visible pl-10 w-80 xl:w-80 md:w-70 sm:w-0
                      h-[400px] sticky top-20 text-blue-900"
          >
            <span className="underline text-2xl font-bold">COMPANY</span>
            <br />
            <br />
            <a href="/introduce">
              <span className=" text-xl font-semibold">회사소개</span>
            </a>
            <br />
            <br />
            <a href="/history">
              <span className="text-gray-400 text-xl font-semibold hover:text-blue-900 transition duration-500 ease-in-out">
                회사연혁
              </span>
            </a>
            <br />
            <br />
            <a href="/license">
              <span className="text-gray-400 text-xl font-semibold hover:text-blue-900 transition duration-500 ease-in-out">
                특허 및 인증현황
              </span>
            </a>
            <br />
            <br />
            <a href="/road">
              <span className="text-gray-400 text-xl font-semibold hover:text-blue-900 transition duration-500 ease-in-out">
                오시는 길
              </span>
            </a>
          </div>

          {/* Main contect */}
          <div className="sm:pl-0 w-5/4 h-full pr-10 pl-10 md:pl-10 lg:pl-10 xl:pl-10">
            <span className="text-black text-4xl font-semibold">
              CEO 인사말
            </span>
            <img src={ceo} className="pt-10 w-full" alt="CEO 인사말" />
            <hr class="my-20 h-px bg-gray-200 border-0"></hr>
            <span className="text-black text-4xl font-semibold">회사개요</span>
            <br />
            <div className="pt-10"></div>
            <span className="text-black text-2xl font-semibold">
              회사명 : (주)엠씨티
            </span>
            <br />
            <span className="text-black text-2xl font-semibold">
              Motorcar Componentry Technology
            </span>
            <br />
            <br />
            <span className="text-gray-600 text-2xl font-semibold">
              "엠씨티는 자동차용 부품을 생산하는 자동차 부품 전문회사입니다”
            </span>
            <img src={location} className="pt-20 w-3/4" alt="MCT 위치" />
            <div className="pt-20"></div>
            <table className="table-auto w-full text-center font-semibold">
              <tbody>
                <tr>
                  <td className="bg-black/[.08] p-4 shadow-md">설립일</td>
                  <td className="shadow-md">2000.11.01</td>
                </tr>
                <tr>
                  <td className="bg-black/[.08] p-4 shadow-md">
                    대표이사(CEO)
                  </td>
                  <td className="shadow-md">최병선</td>
                </tr>
                <tr>
                  <td className="bg-black/[.08] p-4 shadow-md">주소</td>
                  <td className="shadow-md">
                    경상남도 김해시 진례면 테크노밸리로 193-29
                  </td>
                </tr>
                <tr>
                  <td className="bg-black/[.08] p-4 shadow-md">자본금</td>
                  <td className="shadow-md">8.5억원</td>
                </tr>
                <tr>
                  <td className="bg-black/[.08] p-4 shadow-md">사업영역</td>
                  <td className="shadow-md">
                    자동차용 PIPE 절단, 면취 CNC정밀가공부품 생산
                  </td>
                </tr>
                <tr>
                  <td className="bg-black/[.08] p-4 shadow-md">면적</td>
                  <td className="shadow-md">
                    대지면적(약 1,700평) / 공장동(약 1,300평)
                  </td>
                </tr>
              </tbody>
            </table>
            <hr class="my-20 h-px bg-gray-200 border-0"></hr>
            <span className="text-black text-4xl font-semibold">
              회사 전경 및 공장 내부
            </span>
            <br />
            <div className="pt-20"></div>
            <img
              src={mct_entire1}
              className="pb-5 w-full"
              alt="MCT 회사 전경"
            />
            <span className="pl-[47%] text-black/[.80] text-lg font-semibold">
              [ 회사 전경 ]
            </span>
            <div className="pt-5"></div>
            <img src={cnc} className="pb-5 w-full" alt="MCT 회사 전경" />
            <span className="pl-[20%] text-black/[.80] text-lg font-semibold">
              [ 절단, 면취 가공 ]
            </span>
            <span className="pl-[43%] text-black/[.80] text-lg font-semibold">
              [ CNC 가공 ]
            </span>
            <div className="pt-5"></div>

            <div className="pt-5"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Introduce;
