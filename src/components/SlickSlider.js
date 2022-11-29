import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import "./SlickSlider.css";
// import prevarrowwhite from "./image/arrow-right.png";
// import nextarrowwhite from "./image/arrow-right.png";

const Container = styled.div`
  overflow: hidden;
  text-align: center;
`;

const StyledSlider = styled(Slider)`
  .slick-slide div {
    outline: none;
  }

  .slick-arrow {
    display: flex;
    z-index: 10;
    width: 1vw;
    height: 1vw;
  }
  .slick-dots {
    width: 100%;
    bottom: 23px;
  }
  .slick-dots li button:before {
    color: white;
    font-size: 10px;
  }
  /* 
  .slick-prev {
    left: -1.2vw;
    cursor: pointer;
    &::before {
      content: "";
    }
  }

  .slick-next {
    right: -1.1vw;
    cursor: pointer;
    &::before {
      content: "";
    }
  } */
`;

// export const ImproptuPrevArrow = styled.img.attrs({
//   src: prevarrowwhite,
// })`
//   width: 20px;
//   height: 14px;
// `;

// export const ImproptuNextArrow = styled.img.attrs({
//   src: nextarrowwhite,
// })`
//   width: 20px;
//   height: 14px;
// `;

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

// function NextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <styled.ImproptuNextArrow />
//     </div>
//   );
// }

// function PrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       <styled.ImproptuPrevArrow />
//     </div>
//   );
// }

class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplayspeed: 2000,
      centerMode: true,
      // prewArrow: <PrevArrow />,
      // nextArrow: <NextArrow />,
    };

    return (
      <div className="ComponentBox">
        <Container>
          <StyledSlider {...settings}>
            {items.map((item) => {
              return (
                <div key={item.id}>
                  <div className="my-0 mx-3">
                    <div className="absolute justify-items-center align-center text-black opacity-0.8">
                      <div className="font-sm">{item.text4}</div>
                      <div className="font-black mb-10 text-2xl">
                        {item.text1}
                      </div>
                      <div className="font-black mb-10 text-2xl">
                        {item.text2}
                      </div>
                      <div className="font-black mb-10 text-2xl">
                        {item.text3}
                      </div>
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

{
  /* <div class="slide slide_02 slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style="width: 1440px;">
                    <div class="main_title">
                        <div class="border_box">
                            <div class="border_box">
                                <div class="border_left_box">
                                <img src="http://smartkor.kr/theme/smartkorea/contents/img/title_left.png">
                                </div>
                                <div class="border_right_box">
                                <img src="http://smartkor.kr/theme/smartkorea/contents/img/title_right.png">
                                </div>
                            </div>
                        </div>
                        <div class="main_text_box">
                            <div class="main_text_top font_noto">
                                <span>신뢰성 높은 품질의 제품!</span>
                            </div>
                            <div class="main_text_bottom">
                                <span><span class="bold">SMART</span>KOREA</span>
                            </div>
                        </div>
                    </div>
                </div> */
}
