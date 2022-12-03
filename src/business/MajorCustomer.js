import { Component } from "react";
import Footer from "../components/Footer";
import major01 from "../img/major01.png";
import major02 from "../img/major02.png";
import major03 from "../img/major03.png";
import major04 from "../img/major04.png";
import major05 from "../img/major05.png";
import major06 from "../img/major06.png";
import major07 from "../img/major07.png";
import major08 from "../img/major08.png";
import mcthelp from "../img/Help.png";
import rightarrow from "../img/free-icon-chevron-6367846.png";

class MajorCustomer extends Component {
  render() {
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
              BUSINESS
              <div className="flex justify-center">
                <hr className="mt-5 mb-10 h-px border-2 w-1/3 bg-black border-black" />
              </div>
              <span className="text-4xl">주요 거래선</span>
            </p>
          </div>

          <div className="flex flex-rows-1 pl-10 pt-10 sm:pt-20 md:pt-20 pb-10 sm:pb-20 md:pb-20 w-full bg-white">
            <span className="font-bold">홈</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">BUSINESS</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">주요 거래선</span>
          </div>
        </div>

        <div className="flex flex-rows-1 pb-40">
          <div className="px-10 sm:px-20 w-full h-full">
            {/* top */}
            <div>
              <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
                주요 거래선
              </span>
              <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
              <br />
              <br />
              <span className="text-[#000] text-base sm:text-2xl font-light">
                “MCT는
                <span className="font-bold">
                  &nbsp;여러 기업과 함께 더 나은 서비스
                </span>
                를 제공하기 위해 힘씁니다.”
              </span>
            </div>
            {/* main content */}
            <div
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="500"
            >
              <div className="pt-10 sm:pt-20 flex flex-col gap-5 lg:flex-row md:m-0 mb-10 sm:mb-20 ">
                <div className="p-8 lg:p-12 bg-[#D9D9D9] rounded-lg flex grid justify-items-center items-center sm:items-center lg:items-center">
                  <p className="text-center font-bold text-sm sm:text-xl md:text-xl">
                    Car Makers (End User)
                  </p>
                </div>
                <div className="rounded-lg p-5 bg-white shadow-md grid grid-cols-2 md:grid-cols-3 gap-1 justify-items-center lg:ml-10 pt-5">
                  <img src={major01} alt="carmakers01" className="w-2/3" />
                  <img src={major02} alt="carmakers02" className="w-2/3" />
                  <img src={major03} alt="carmakers03" className="w-2/3" />
                  <img src={major04} alt="carmakers04" className="w-2/3" />
                  <img src={major05} alt="carmakers05" className="w-2/3" />
                  <img src={major06} alt="carmakers06" className="w-2/3" />
                  <img src={major07} alt="carmakers07" className="w-2/3" />
                </div>
              </div>
              <div className="pt-10 sm:pt-20 flex flex-col gap-5 lg:flex-row md:m-0 mb-10 sm:mb-20">
                <div className="p-8 lg:p-16 bg-[#D9D9D9] rounded-lg grid justify-items-center">
                  <p className="text-center font-bold text-sm sm:text-xl md:text-xl">
                    Tier-1
                  </p>
                </div>
                <div className="rounded-lg p-5 bg-white shadow-md grid grid-cols-2 md:grid-cols-3 gap-1 justify-items-center lg:ml-10 pt-5">
                  <img src={major08} alt="carmakers08" className="w-2/3" />
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

export default MajorCustomer;
