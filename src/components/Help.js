import { Component } from "react";
import mcthelp from "../img/Help.png";
import call from "../img/free-icon-telephone-159844.png";
import message from "../img/free-icon-phone-message-3318454.png";

class Help extends Component {
  render() {
    return (
      <div>
        <div className="relative text-left">
          <img
            src={mcthelp}
            className="object-scale-contain h-[32rem] w-full xl:object-cover xl:h-full lg:w-full lg:h-1/2 md:h-1/2
            md:object-scale-none md:h-[36rem] md:w-full
            sm:object-scale-none sm:h-[36rem] sm:w-full"
            alt="help"
          />
          <div>
            <h1
              class="absolute font-bold text-2xl xl:text-5xl
            lg:text-5xl md:text-4xl
            sm:text-3xl top-[4rem] left-10"
            >
              <div className="xl:pt-3"></div>
              <span className="pl-3 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10">
                도움이 필요하신가요?
              </span>
            </h1>
          </div>
          <h1 class="absolute text-3xl top-20 left-10">
            <br />
            <br />
            <div className="xl:pt-12 xl:mt-8"></div>
            <div className="grid grid-cols-2 ml-2 sm:ml-10 md:ml-10 lg:ml-10 xl:ml-10">
              <img
                src={call}
                className="justify-start h-9 w-9 xl:h-12 xl:w-12 lg:w-10 lg:h-10 md:h-10 sm:h-10 sm:w-10"
                alt="call"
              />
              <img
                src={call}
                className="invisible justify-end h-9 w-9 xl:h-12 xl:w-12 lg:w-10 lg:h-10 md:h-10 sm:h-10 sm:w-10"
                alt="call"
              />
            </div>
            <div className="xl:pt-3"></div>
            <span className="pl-3 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 font-bold text-lg xl:text-3xl lg:text-2xl sm:text-xl">
              문의안내
            </span>
            <br />
            <span className="pl-3 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 font-medium text-lg xl:text-2xl lg:text-2xl sm:text-xl">
              • 대표전화 : 055-343-9322~1
            </span>
            <br />
            <br />
            <div className="xl:pt-10"></div>
            <div className="ml-2 sm:ml-10 md:ml-10 lg:ml-10 xl:ml-10 grid grid-cols-2">
              <img
                src={message}
                className="justify-start h-9 w-9 xl:h-12 xl:w-12 lg:w-10 lg:h-10 md:h-10 sm:h-10 sm:w-10"
                alt="call"
              />
              <img
                src={message}
                className="invisible justify-end h-9 w-9 xl:h-12 xl:w-12 lg:w-10 lg:h-10 md:h-10 sm:h-10 sm:w-10"
                alt="call"
              />
            </div>
            <div className="xl:pt-3"></div>
            <span className="pl-3 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 font-bold text-lg xl:text-3xl lg:text-2xl sm:text-xl">
              이용시간
            </span>
            <br />
            <span className="pl-3 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 font-medium text-lg xl:text-2xl lg:text-2xl sm:text-xl">
              • 문의시간 : 평일 AM 09:00 ~ PM 18:00
            </span>
            <br />
            <span className="pl-3 sm:pl-10 md:pl-10 lg:pl-10 xl:pl-10 font-medium text-lg xl:text-2xl lg:text-2xl sm:text-xl">
              • 점심시간 : PM 12:00 ~ PM 13:00
            </span>
            <br />
          </h1>
        </div>
      </div>
    );
  }
}

export default Help;
