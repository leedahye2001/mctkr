import { Component } from "react";
//import "./HistorySide.scss";

class History extends Component {
  render() {
    return (
      <div>
        <div className="h-20 w-full font-bold bg: white">
          Home > Company > 회사연혁
        </div>

        <div class="container">
          <div class="content">Main content</div>
          <div class="sidebar">Sticky Sidebar </div>
        </div>

        <div class="footer">Footer</div>
      </div>
    );
  }
}

export default History;
