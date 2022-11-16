import { Component } from "react";
import SlickSlider from "../components/SlickSlider";
import Explain from "../components/Explain";

class Home extends Component {
  render() {
    return (
      <div>
        <SlickSlider />
        <Explain />
      </div>
    );
  }
}

export default Home;
