import { Component } from "react";
import Footer from "../components/Footer";
import product01 from "../img/product01.png";
import product02 from "../img/product02.png";
import product03 from "../img/product03.png";
import product04 from "../img/product04.png";
import product05 from "../img/product05.png";
import product06 from "../img/product06.png";
import product07 from "../img/product07.png";
import product08 from "../img/product08.png";
import product09 from "../img/product09.png";
import downarrow from "../img/downarrow.png";

class ProductIntro extends Component {
  render() {
    return (
      <div>
        <div className="flex flex-rows-1 pb-40">
          <div className="px-10 sm:px-20 w-full h-full">
            {/* top */}
            <div>
              <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
                제품소개
              </span>
              <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
              <span className="text-[#000] text-base sm:text-2xl font-light">
                “MCT의&nbsp;
                <span className="font-bold">주요 생산품</span>을 소개합니다.”
              </span>
            </div>

            {/* main content */}
            <div className="pt-10 sm:pt-20 flex flex-col md:m-0 mb-10 sm:mb-20">
              {/* 1 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-60 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row gap-5">
                    <div>
                      <img src={product01} className="w-full" alt="BALL STUD" />
                      <p className="text-center py-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        BALL STUD
                      </p>
                    </div>
                    <div>
                      <img src={product02} className="w-full" alt="SOCKET" />
                      <p className="text-center pt-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        SOCKET
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={downarrow} className="w-full" alt="BALL STUD" />
                  </div>
                  <div>
                    <img src={product03} className="w-full" alt="BALL STUD" />
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-60 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row gap-5">
                    <div>
                      <img src={product04} className="w-full" alt="BALL STUD" />
                      <p className="text-center py-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        WASHER, RETAINER
                      </p>
                    </div>
                    <div className="pt-[2px]">
                      <img src={product05} className="w-full" alt="SOCKET" />
                      <p className="text-center py-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        PLUG
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={downarrow} className="w-full" alt="downarrow" />
                  </div>
                  <div>
                    <img src={product06} className="w-full" alt="product06" />
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div
                className="rounded-lg p-5 bg-white shadow-md gap-1 pt-5 mx-0 lg:mx-60 mb-10 sm:mb-20"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="500"
              >
                <div className="flex flex-col">
                  <div className="flex flex-row gap-5">
                    <div>
                      <img src={product07} className="w-full" alt="BALL STUD" />
                      <p className="text-center py-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        PIPE ROD (특허 등록 생산 제품)
                      </p>
                    </div>
                    <div className="pt-[2px]">
                      <img src={product08} className="w-full" alt="SOCKET" />
                      <p className="text-center py-5 font-semibold text-xs sm:text-lg lg:text-xl">
                        AL ROD
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src={downarrow} className="w-full" alt="downarrow" />
                  </div>
                  <div className="grid justify-items-center">
                    <img src={product09} className="w-1/2" alt="product06" />
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

export default ProductIntro;
