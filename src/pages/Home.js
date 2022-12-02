import { useEffect, useState } from "react";
import SlickSlider from "../components/SlickSlider";
import Explain from "../components/Explain";
import Sales from "../components/Sales";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import NewsSection from "../news/NewsSection";
import Help from "../components/Help";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
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
      <SlickSlider />
      <Explain />
      <NewsSection news={news} />
      <Sales />
      <Help />
      <Footer />
    </div>
  );
};

export default Home;
