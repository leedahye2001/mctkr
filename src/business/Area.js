import { Component } from "react";
import Footer from "../components/Footer";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import area01 from "../img/area01.png";
import area02 from "../img/area02.png";
import area03 from "../img/area03.png";
import area04 from "../img/area04.png";
import area05 from "../img/area05.png";
import area06 from "../img/road-ga288eb08e_1280.jpg";

class Area extends Component {
  render() {
    return (
      <div>
        {/* <div>
          <div className="flex flex-rows-1 pl-10 sm:pl-20 pt-10 sm:pt-20 md:pt-20 pb-10 sm:pb-20 md:pb-20 w-full bg-white">
            <span className="font-bold">홈</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">COMPANY</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">회사연혁</span>
          </div>
        </div> */}

        <div className="flex flex-rows-1">
          <div className="px-10 sm:px-20 w-full h-full">
            {/* top */}
            <div>
              <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
                사업영역 및 소개
              </span>
              <hr className="my-10 h-px border-2 w-1/3 bg-black border-black" />
              <br />
              <span className="text-[#333] text-xl sm:text-2xl font-semibold">
                고객 만족을 실현하는 기업,
              </span>
              <br />
              <br />
              <span className="text-[#000] text-base sm:text-2xl font-light">
                “MCT는
                <span className="font-bold">
                  자동차용 PIPE 절단, 면취와 CNC정밀가공부품
                </span>
                을 생산합니다. &nbsp; <br />
                <span className="font-bold">
                  최고의 자동차 부품 생산 전문 기업
                </span>
                이 되기 위해 언제나 힘씁니다.”
              </span>
            </div>

            {/* Main contect */}
            <div className="pb-20 py-10 mt-10">
              {/* area01 */}
              <div className="flex flex-col md:flex-col lg:flex-row mb-20">
                <img
                  src={area01}
                  alt="area01"
                  className="w-full md:w-full lg:w-2/3 "
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                />
                <div
                  className="grid grid-cols-1 content-center text-start lg:ml-20 pt-5"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl">
                    품질 보증으로
                    <br />
                    <span className="underline">고객이 먼저 찾는 기업</span>
                  </p>
                  <div className="mb-5"></div>
                  <p className="text-base sm:text-xl text-[#666666]">
                    품질관리 전산화 시스템을 도입하여 제품 생산의 고품질을
                    구현함으로써 고객이 먼저 찾는 기업이 됩니다.
                  </p>
                </div>
              </div>
              {/* area02 */}
              <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row mb-20">
                <div
                  className="grid grid-cols-1 content-center text-end ml-0 lg:ml-20 pt-5 mr-0 lg:mr-20"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl">
                    차별화된 기술력으로
                    <br />
                    <span className="underline">가격 경쟁력 확보</span>
                    <div className="mb-5"></div>
                  </p>
                  <p className="text-base sm:text-xl text-[#666666]">
                    품질관리 전산화 시스템을 도입하여 제품 생산의 고품질을
                    구현함으로써 고객이 먼저 찾는 기업이 됩니다.
                  </p>
                </div>
                <img
                  src={area02}
                  alt="area02"
                  className="w-full md:w-full lg:w-2/3 "
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                />
              </div>
              {/* area03 */}
              <div className="flex flex-col md:flex-col lg:flex-row mb-20">
                <img
                  src={area03}
                  alt="area03"
                  className="w-full md:w-full lg:w-2/3 "
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                />
                <div
                  className="grid grid-cols-1 content-center text-start lg:ml-20 pt-5"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl">
                    불량률 “Zero”化
                    <br />
                    <span className="underline">실현을 위한 지속적 실천</span>
                  </p>
                  <div className="mb-5"></div>
                  <p className="text-base sm:text-xl text-[#666666]">
                    전체 Line 자주검사(초/중/종물) 등 품질 검사를 실시하여
                    불량률이 없도록 지속적으로 실천하고 있습니다.
                  </p>
                </div>
              </div>
              {/* area04 */}
              <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row mb-20">
                <div
                  className="grid grid-cols-1 content-center text-end ml-0 lg:ml-20 pt-5 mr-0 lg:mr-20"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl">
                    신속한 대응으로
                    <br />
                    <span className="underline">고객 만족도 UP</span>
                    <div className="mb-5"></div>
                  </p>
                  <p className="text-base sm:text-xl text-[#666666]">
                    사업 분야에 풍부한 경험을 바탕으로 고품질을 제품을 생산할
                    뿐만 아니라, 신속한 대응으로 높은 신뢰도와 만족도를
                    제공합니다.
                  </p>
                </div>
                <img
                  src={area04}
                  alt="area04"
                  className=" w-full md:w-full lg:w-2/3"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                />
              </div>
              {/* area05 */}
              <div className="flex flex-col md:flex-col lg:flex-row mb-20 ">
                <img
                  src={area05}
                  alt="area05"
                  className="w-full md:w-full lg:w-2/3 "
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                />
                <div
                  className="grid grid-cols-1 content-center text-start lg:ml-20 pt-5"
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl">
                    품질 고급화로
                    <br />
                    <span className="underline">World Best 지향</span>
                  </p>
                  <div className="mb-5"></div>
                  <p className="text-base sm:text-xl text-[#666666]">
                    신규 사업을 통해서 새로운 성장 동력을 발굴하는 노력을
                    기울이고 있습니다.
                  </p>
                </div>
              </div>
              {/* area06 */}
              <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row mb-20">
                <div
                  className="grid grid-cols-1 content-center text-end ml-0 lg:ml-20 pt-5 mr-0 lg:mr-20"
                  data-aos="fade-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                >
                  <p className="font-bold text-xl sm:text-2xl md:text-3xl">
                    도전과 변화를 통한
                    <br />
                    <span className="underline">미래지향 기업으로 성장</span>
                    <div className="mb-5"></div>
                  </p>
                  <p className="text-base sm:text-xl text-[#666666]">
                    제한된 도전이 아닌 변화와 미래를 지향하는 기업, 열린
                    경영으로 기업의 미래를 꿈꾸며 성장합니다.
                  </p>
                </div>
                <img
                  src={area06}
                  alt="area06"
                  className="w-full md:w-full lg:w-2/3 "
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="500"
                />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Area;
