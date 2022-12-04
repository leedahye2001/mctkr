export const links = [
  {
    name: "COMPANY",
    submenu: true,
    sublinks: [
      {
        Head: "회사소개",
        sublink: [
          { name: "CEO 인사말", link: "/introduce" },
          { name: "회사개요", link: "/introduce" },
          { name: "회사 전경 및 공장 내부", link: "/introduce" },
          { name: "조직도", link: "/introduce" },
        ],
      },
      {
        Head: "회사연혁",
        sublink: [{ name: "회사연혁", link: "/history" }],
      },
      {
        Head: "특허 및 인증현황",
        sublink: [
          { name: "특허 및 인증서", link: "/license" },
          { name: "수상 실적", link: "/license" },
        ],
      },
      {
        Head: "오시는 길",
        sublink: [{ name: "오시는 길", link: "/road" }],
      },
    ],
  },
  {
    name: "BUSINESS",
    submenu: true,
    sublinks: [
      {
        Head: "사업영역 및 소개",
        sublink: [
          { name: "사업영역", link: "/area" },
          { name: "사업소개", link: "/area" },
        ],
      },
      {
        Head: "주요 거래선",
        sublink: [
          { name: "Car Makers", link: "/majorcustomer" },
          { name: "Tier-1", link: "/majorcustomer" },
        ],
      },
    ],
  },
  {
    name: "PRODUCT",
    submenu: true,
    sublinks: [
      {
        Head: "제품소개",
        sublink: [{ name: "주요 생산품", link: "/productintro" }],
      },
      {
        Head: "생산설비",
        sublink: [{ name: "생산설비", link: "/productionline" }],
      },
      {
        Head: "측정검사설비",
        sublink: [{ name: "측정검사설비", link: "/measurementfacility" }],
      },
    ],
  },
  {
    name: "NEWS",
    submenu: true,
    sublinks: [
      {
        Head: "뉴스",
        sublink: [{ name: "뉴스 및 보도자료", link: "/news" }],
      },
    ],
  },
  {
    name: "CUSTOMER",
    submenu: true,
    sublinks: [
      {
        Head: "NOTICE",
        sublink: [{ name: "공지사항", link: "/notice" }],
      },
      {
        Head: "CONTACT",
        sublink: [{ name: "온라인 문의", link: "/contact" }],
      },
    ],
  },
];
