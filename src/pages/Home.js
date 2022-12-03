import { useEffect, useState } from "react";
import SlickSlider from "../components/SlickSlider";
import Explain from "../components/Explain";
import Sales from "../components/Sales";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase-config";
import NewsSection from "../news/NewsSection";
import Notice from "../contact/Notice";
import Help from "../components/Help";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  // const [loading, setLoading] = useState(true);
  // const [news, setNews] = useState();

  // useEffect(() => {
  //   const unsub = onSnapshot(
  //     collection(db, "news"),
  //     (snapshot) => {
  //       let list = [];
  //       snapshot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setNews(list);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   return () => {
  //     unsub();
  //   };
  // }, []);

  // console.log("news", news);

  return (
    <div>
      <SlickSlider />
      <Explain />
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <NewsSection news={news} />
        <Notice />
      </div> */}
      <Sales />
      <Help />
      <Footer />
    </div>
  );
};

export default Home;
