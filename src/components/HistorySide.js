import { Component } from "react";
import rightarrow from "../img/free-icon-chevron-6367846.png";

class History extends Component {
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
          <span className="font-bold">연혁</span>
        </div>
      </div>
    );
  }
}

export default History;
