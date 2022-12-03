import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";

const Container = styled.div`
  overflow: hidden;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-dots {
    width: 100%;
    bottom: 23px;
  }
  .slick-dots li button:before {
    color: black;
    font-size: 10px;
  }
`;

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

class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplayspeed: 1000,
      centerMode: true,
    };

    return (
      <div className="flex justify-center align-items-center">
        <Container>
          <StyledSlider {...settings}>
            {items.map((item) => {
              return (
                <div key={item.id} className="relative">
                  <div className="my-0 mx-0 w-full">
                    <div
                      className="top-1/2 sm:top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 
                    absolute justify-center align-center text-black opacity-0.8"
                    >
                      <div className="text-xl text-[#005AAC] pb-10">
                        {item.text4}
                      </div>
                      {/* <div className="font-black mb-10 text-2xl"> */}
                      <div className="font-black text-5xl">
                        <div>{item.text1}</div>
                        <br />
                        <div>{item.text2}</div>
                        <br />
                        {/* </div>
                      <div className="font-black mb-10 text-2xl"> */}
                        <div>{item.text3}</div>
                      </div>
                      {/* </div> */}
                    </div>
                    <img
                      src={item.url}
                      className="object-cover h-[500px] lg:h-full w-full"
                      alt="MCT 메인 배너 사진 3가지"
                    />
                  </div>
                </div>
              );
            })}
          </StyledSlider>
        </Container>
      </div>
    );
  }
}

export default SlickSlider;
