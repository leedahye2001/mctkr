import { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <footer class="bg-neutral-700 text-center lg:text-left">
          <div class="p-6 text-white">
            <div class="pt-2">
              <div class="pl-5 mb-6 md:mb-0">
                <h5 class="text-xl sm:text-2xl xl:text-3xl font-medium mb-2">
                  Motorcar
                  <br />
                  Componentry
                  <br />
                  Technology
                </h5>
              </div>
              <div
                class="pt-5 text-center
               font-light text-xs xl:text-lg sm:text-sm"
              >
                <span className="font-semibold">(주)엠씨티 </span>|
                <span className="font-semibold"> 대표이사 : </span>최병선 |
                <span className="font-semibold"> 주소 : </span>
                경상남도 김해시 진례면 테크노밸리로 193-29 (진례면 고모리)
                <br />
                <span className="font-semibold">전화 :</span> 055-343-9322~1 |
                <span className="font-semibold"> Email :</span> mct@mctkr.com
              </div>
            </div>
          </div>

          <div class="text-center bg-neutral-700 text-white p-4 text-xs sm:text-sm ">
            Copyright © MCT.All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
