import { Component } from "react";
import SlickSlider from "../components/SlickSlider";
import Explain from "../components/Explain";
import Sales from "../components/Sales";
import Help from "../components/Help";
import Footer from "../components/Footer";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        {/* <SlickSlider /> */}
        <Explain />
        <Sales />
        <Help />
        <Footer />
      </div>
    );
  }
}

export default Home;
