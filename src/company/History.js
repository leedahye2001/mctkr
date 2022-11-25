import { Component } from "react";
import Footer from "../components/Footer";
import HistorySide from "../components/HistorySide";

class History extends Component {
  render() {
    return (
      <div>
        <HistorySide />
        <div className="flex flex-rows-1 ">
          {/* left sidemenu */}
          <div
            className="invisible sm:invisible md:invisible lg:visible xl:visible
                      pl-10 sm:pl-10 lg:w-[250px] xl:w-[250px] w-0 md:w-70 sm:w-0
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
          </div>

          {/* Main contect */}
          <div className="pl-0 sm:pl-0 w-full h-full pr-10 sm:pr-10 md:pl-0 lg:pl-0 xl:pl-10">
            <span className="text-black text-3xl sm:text-4xl font-semibold">
              회사연혁
            </span>
            <br />
            <div className="pt-10"></div>
            <span className="text-black text-xl sm:text-2xl font-semibold">
              열정과 도전의 여정,
            </span>
            
            <br />
            <br />
            <span className="text-gray-600 text-lg sm:text-2xl sm:text-2xl font-semibold">
              "창업부터 현재까지 MCT의 역사를 소개합니다.”
            </span>
            <div className="grid border-4 border-black justify-items-center">
             <div className="w-0 h-[1000px] border-4 border-black">
                asdf
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
