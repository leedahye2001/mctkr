import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactForm from "./contact/ContactForm";
import History from "./company/History";
import Introduce from "./company/Introduce";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/history" element={<History />} />
            <Route path="/introduce" element={<Introduce />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
