import React from "react";

import { Carousel } from "antd";

const items = [
  {
    id: 1,
    url: require("../img/mct_entire.png"),
    text4: "최고의 자동차 부품 생산에 힘쓰는 기업",
    text1: "Motorcar",
    text2: "Componentry",
    text3: "Technology",
  },
  {
    id: 2,
    url: require("../img/mctmain02N.png"),
    text4: "끊임없는 열정과 노력으로 제공하는 서비스",
    text1: "Passion",
    text2: "and",
    text3: "Challenge",
  },
  {
    id: 3,
    url: require("../img/mctmain03N.png"),
    text4: "국내를 넘어 전 세계를 향해 성장하는 기업",
    text1: "Grow",
    text2: "into the",
    text3: "Global Company",
  },
];

const SlickSlider = () => (
  <div>
    <Carousel autoplay autoplaySpeed={5000} speed={2000}>
      {items.map((item) => {
        return (
          <div className="relative">
            <div className="text-center" key={item.id}>
              <div
                key={item.id}
                className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    absolute justify-center align-center text-black opacity-0.8"
              >
                <div className="mb-10 -mt-20">
                  <p className="text-sm sm:text-base">{item.text4}</p>
                </div>
                <div>
                  <h1 className="font-black text-3xl md:text-5xl mb-2">
                    {item.text1}
                  </h1>
                  <h1 className="font-black text-3xl md:text-5xl mb-2">
                    {item.text2}
                  </h1>
                  <h1 className="font-black text-3xl md:text-5xl">
                    {item.text3}
                  </h1>
                </div>
              </div>
              <img
                src={item.url}
                className="object-cover h-full w-full"
                alt="MCT 메인 배너 사진 3가지"
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  </div>
);
export default SlickSlider;
