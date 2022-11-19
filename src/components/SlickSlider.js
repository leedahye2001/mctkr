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

export const BannerText = styled.div`
  position: absolute;
  text-align: center;
  color: black;
  opacity: 0.8;
`;

export const BannerText4 = styled.div`
  font-size: 20px;
`;

export const BannerText1 = styled.div`
  font-size: 50px;
  margin-bottom: 15;
  font-weight: 700;
`;

export const BannerText2 = styled.div`
  font-size: 50px;
  margin-bottom: 15;
  font-weight: 700;
`;

export const BannerText3 = styled.div`
  font-size: 50px;
  margin-bottom: 15;
  font-weight: 700;
`;

export const ImageContainer = styled.div`
  margin: 0 16px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
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
                  <ImageContainer>
                    <BannerText>
                      <BannerText4> {item.text4} </BannerText4>
                      <BannerText1> {item.text1} </BannerText1>
                      <BannerText2> {item.text2} </BannerText2>
                      <BannerText3> {item.text3} </BannerText3>
                    </BannerText>
                    <Image src={item.url} />
                  </ImageContainer>
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
