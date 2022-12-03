import React, { useState, useEffect } from "react";
import { collection, doc, deleteDoc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import NewsSection from "./NewsSection";
import Spinner from "./Spinner";
import rightarrow from "../img/free-icon-chevron-6367846.png";
import mcthelp from "../img/Help.png";

const News = ({ setActive, user }) => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "news"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNews(list);
        setLoading(false);
        // setActive("home");
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  if (loading) {
    return <Spinner />;
  }
  console.log("news", news);

  const handleDelete = async (id) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        setLoading(true);
        await deleteDoc(doc(db, "news", id));
      } catch (err) {
        console.log(err);
      }
    }
  };

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
            NEWS
            <div className="flex justify-center">
              <hr className="mt-5 mb-10 h-px border-2 w-1/3 bg-black border-black" />
            </div>
            <span className="text-4xl">뉴스 및 보도자료</span>
          </p>
        </div>

        <div className="flex flex-rows-1 pl-10 pt-10 sm:pt-20 md:pt-20 pb-10 sm:pb-20 md:pb-20 w-full bg-white">
          <span className="font-bold">홈</span>
          <div className="pl-2"></div>
          <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
          <div className="pl-2"></div>
          <span className="font-bold">NEWS</span>
          <div className="pl-2"></div>
          <img src={rightarrow} className="pt-1 h-5 w-5" alt="rightarrow" />
          <div className="pl-2"></div>
          <span className="font-bold">뉴스 및 보도자료</span>
        </div>
      </div>

      <div className="flex flex-rows-1 pb-40">
        <div className="py-10 px-10 sm:px-20 w-full h-full">
          {/* top */}
          <div className="pb-10">
            <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
              뉴스
            </span>
            <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
            <span className="text-[#000] text-base sm:text-2xl font-light">
              “MCT의&nbsp;
              <span className="font-bold">뉴스 및 언론보도</span>를 소개합니다.”
            </span>
          </div>
          <NewsSection news={news} user={user} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default News;
