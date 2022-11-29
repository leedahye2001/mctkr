// import React, { useEffect } from "react";

// const { kakao } = window;

// const Map = () => {
//   useEffect(() => {
//     const container = document.getElementById("myMap");
//     const options = {
//       center: new kakao.maps.LatLng(33.450701, 126.570667),
//       level: 3,
//     };
//     const map = new kakao.maps.Map(container, options);
//   }, []);

//   return (
//     <div
//       id="myMap"
//       style={{
//         width: "100%",
//         height: "100vh",
//       }}
//     ></div>
//   );
// };

// export default Map;

import React, { useEffect } from "react";

const { kakao } = window;
export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  // 카카오맵 띄우기 위함
  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.28099621999976, 128.7711659600008),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(
      35.28099621999976,
      128.7711659600008
    );

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}

// <!-- * 카카오맵 - 지도퍼가기 -->
// <!-- 1. 지도 노드 -->
// <div id="daumRoughmapContainer1669607450761" class="root_daum_roughmap root_daum_roughmap_landing"></div>

// <!--
// 	2. 설치 스크립트
// 	* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
// -->
// <script charset="UTF-8" class="daum_roughmap_loader_script"
//src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

// <!-- 3. 실행 스크립트 -->
// <script charset="UTF-8">
// 	new daum.roughmap.Lander({
// 		"timestamp" : "1669607450761",
// 		"key" : "2crfh",
// 		"mapWidth" : "640",
// 		"mapHeight" : "360"
// 	}).render();
// </script>
