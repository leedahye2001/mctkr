import { useEffect, useState } from "react";
import SlickSlider from "../components/SlickSlider";
import Explain from "../components/Explain";
import Sales from "../components/Sales";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import NewsHome from "../news/NewsHome";
import NoticeHome from "../customer/NoticeHome";
import Help from "../components/Help";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState();
  const [notice, setNotice] = useState();

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

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "notice"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setNotice(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <SlickSlider />
      <div className="my-5 grid grid-cols-1 lg:grid-cols-2 gap-0">
        <NewsHome news={news} />
        <NoticeHome notice={notice} />
      </div>
      <Explain />

      <Sales />
      <Help />
      <Footer />
    </div>
  );
};

export default Home;
