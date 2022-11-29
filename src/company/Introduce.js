import { Component } from "react";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import ceo from "../img/ceohello.jpeg";
import Footer from "../components/Footer";
import location from "../img/Group 98.svg";
import mct_entire1 from "../img/mct_entire1.png";
import organization_chart from "../img/organization_chart.svg";
import cnc from "../img/cnc.png";

class Introduce extends Component {
  render() {
    return (
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
          <span className="font-bold">회사소개</span>
        </div>

        <div className="flex flex-rows-1 ">
          {/* left sidemenu */}
          {/* <div
            className="invisible sm:invisible md:visible lg:visible xl:visible
                      pl-10 sm:pl-10 md:w-[400px] w-0 lg:w-70 sm:w-0
                      h-[400px] sticky top-40 text-blue-900"
          >
            <span className=" text-2xl font-bold">COMPANY</span>
            <hr class="w-[120px] border-2 border-blue-900"></hr>
            <br />
            <br />
            <a href="/introduce">
              <span className=" text-xl font-base">회사소개</span>
            </a>
            <br />
            <br />
            <a href="/history">
              <span className="text-netural-400 text-xl font-light hover:font-normal hover:text-blue-900 transition duration-500 ease-in-out">
                회사연혁
              </span>
            </a>
            <br />
            <br />
            <a href="/license">
              <span className="text-netural-400 text-xl font-light hover:font-normal hover:text-blue-900 transition duration-500 ease-in-out">
                특허 및 인증현황
              </span>
            </a>
            <br />
            <br />
            <a href="/road">
              <span className="text-netural-400 text-xl font-light hover:font-normal hover:text-blue-900 transition duration-500 ease-in-out">
                조직도
              </span>
            </a>
          </div> */}

          {/* Main contect */}
          <div className="px-10 sm:px-10 w-full h-full">
            <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
              회사소개
            </span>
            <hr className="mt-10 mb-20 h-px border-2 w-1/3 bg-black border-black" />
            <span className="text-black text-3xl sm:text-4xl font-semibold">
              CEO 인사말
            </span>
            <img src={ceo} className="pt-10 w-full" alt="CEO 인사말" />
            <hr class="my-20 h-px bg-gray-200 border-0"></hr>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <span className="text-black text-3xl sm:text-4xl font-semibold">
                회사개요
              </span>
              <br />
              <div className="pt-10"></div>
              <span className="text-black text-xl sm:text-2xl font-semibold">
                회사명 : (주)엠씨티
              </span>
              <br />
              <span className="text-black text-xl sm:text-2xl font-semibold">
                Motorcar Componentry Technology
              </span>
              <br />
              <br />
              <span className="text-gray-600 text-lg sm:text-2xl sm:text-2xl font-semibold">
                "엠씨티는 자동차용 부품을 생산하는 자동차 부품 전문회사입니다”
              </span>
              <img src={location} className="pt-20 w-3/4" alt="MCT 위치" />
            </div>
            <div className="pt-20"></div>
            <table
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="table-auto w-full text-sm sm:text-base lg:text-base md:text-base xl:text-base text-center font-semibold"
            >
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
                  <td className="bg-black/[.08] p-6 shadow-md">사업영역</td>
                  <td className="shadow-md">
                    자동차용 PIPE 절단, 면취
                    <br />
                    CNC정밀가공부품 생산
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
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <span className="text-black text-3xl sm:text-4xl font-semibold">
                회사 전경 및 공장 내부
              </span>
              <br />
              <div className="pt-10"></div>
              <img
                src={mct_entire1}
                className="pb-5 w-full"
                alt="MCT 회사 전경"
              />
              <span className="pl-[38%] sm:pl-[43%] xl:pl-[46%] text-black/[.80] text-base sm:text-xl font-semibold">
                [ 회사 전경 ]
              </span>
              <div className="pt-5"></div>
              <img
                src={cnc}
                className="pt-10 pb-5 w-full"
                alt="MCT 회사 전경"
              />
              <span className="pl-[6%] sm:pl-[11.5%] xl:pl-[20%] text-black/[.80] text-base sm:text-xl font-semibold">
                [ 절단, 면취 가공 ]
              </span>
              <span className="pl-[18%] sm:pl-[29%] xl:pl-[43%] text-black/[.80] text-base sm:text-xl font-semibold">
                [ CNC 가공 ]
              </span>
            </div>
            <hr class="my-20 h-px bg-gray-200 border-0"></hr>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <span className="text-black text-3xl sm:text-4xl font-semibold">
                조직도
              </span>
              <br />
              <img
                src={organization_chart}
                className="pt-10 w-full lg:ml-[15%] sm:w-full md:w-full lg:w-2/3"
                alt="MCT 조직도"
              />
            </div>
            <div className="py-10"></div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Introduce;
