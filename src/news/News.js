import React, { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import NewsSection from "../news/NewsSection";

const News = () => {
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
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  console.log("news", news);
  return (
    <div>
      <div className="flex flex-rows-1 pb-40">
        <div className="px-10 sm:px-20 w-full h-full">
          {/* top */}
          <div>
            <span className="text-black text-3xl sm:text-4xl font-black sm:font-black">
              뉴스
            </span>
            <hr className="my-10 h-px border-2 w-1/6 bg-black border-black" />
            <span className="text-[#000] text-base sm:text-2xl font-light">
              “MCT의&nbsp;
              <span className="font-bold">뉴스 및 언론보도</span>를 소개합니다.”
            </span>
          </div>
          <NewsSection news={news} />
        </div>
      </div>
    </div>
  );
};

export default News;
