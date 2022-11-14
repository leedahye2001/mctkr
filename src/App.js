import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactForm from "./contact/ContactForm";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
