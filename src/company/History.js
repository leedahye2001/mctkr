import { Component } from "react";
import Footer from "../components/Footer";
import HistorySide from "../components/HistorySide";

class History extends Component {
  render() {
    return (
      <div>
        <HistorySide />
        <Footer />
      </div>
    );
  }
}

export default History;
