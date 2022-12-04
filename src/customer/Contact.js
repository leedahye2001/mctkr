import { Component } from "react";
import mcthelp from "../img/Help.png";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import Footer from "../components/Footer";

class Contact extends Component {
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
              CUSTOMER
              <div className="flex justify-center">
                <hr className="mt-5 mb-10 h-px border-2 w-1/3 bg-black border-black" />
              </div>
              <span className="text-4xl">Contact</span>
            </p>
          </div>

          <div className="flex flex-rows-1 pl-10 pt-10 sm:pt-20 md:pt-20 pb-10 sm:pb-20 md:pb-20 w-full bg-white">
            <span className="font-bold">홈</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">CUSTOMER</span>
            <div className="pl-2"></div>
            <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
            <div className="pl-2"></div>
            <span className="font-bold">Contact</span>
          </div>
        </div>

        <div className="flex flex-rows-1 pb-40">
          <div className="px-10 sm:px-20 w-full h-full">
            {/* top */}
            <div>
              <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
                온라인 문의
              </span>
              <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
              <br />
              <br />
              <span className="text-[#000] text-base sm:text-2xl font-light">
                문의사항을 남겨주세요 :)
                <br />“
                <span className="font-bold">내용을 상세히 기재해주시면 </span>
                보다 정확한 답변을 드릴 수 있습니다.”
              </span>
            </div>
            {/* main content */}
            <div>
              <div>
                <section class="bg-white">
                  <div class="px-0 sm:px-20 py-8 lg:py-16">
                    <form action="#" class="space-y-8">
                      <div>
                        <label
                          for="name"
                          class="block mb-2 text-base font-medium text-gray-900 "
                        >
                          이름
                        </label>
                        <input
                          type="text"
                          id="name"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                          placeholder="이름"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="phone"
                          class="block mb-2 text-base font-medium text-gray-900 "
                        >
                          전화번호
                        </label>
                        <input
                          type="phone"
                          id="email"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                          placeholder="01012345678"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          class="block mb-2 text-base font-medium text-gray-900 "
                        >
                          이메일
                        </label>
                        <input
                          type="email"
                          id="email"
                          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                              focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                          placeholder="mct@mctkr.com"
                          required
                        />
                      </div>
                      <div>
                        <label
                          for="subject"
                          class="block mb-2 text-base font-medium text-gray-900 "
                        >
                          제목
                        </label>
                        <input
                          type="text"
                          id="subject"
                          class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border
                          border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500
                          "
                          placeholder="제목을 입력해주세요."
                          required
                        />
                      </div>
                      <div class="sm:col-span-2">
                        <label
                          for="message"
                          class="block mb-2 text-base font-medium text-gray-900 "
                        >
                          내용
                        </label>
                        <textarea
                          id="message"
                          rows="6"
                          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border
                          border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                          placeholder="내용을 입력해주세요."
                        />
                      </div>

                      <button
                        className="border border-[#11264F] bg-[#11264F] rounded-lg
                             hover:bg-blue-900 w-full p-4 my-10 text-white"
                        type="submit"
                      >
                        문의하기
                      </button>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
