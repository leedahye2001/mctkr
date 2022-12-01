import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ContactForm from "./contact/ContactForm";
import History from "./company/History";
import Introduce from "./company/Introduce";
import License from "./company/License";
import Road from "./company/Road";
import Area from "./business/Area";
import Majorcustomer from "./business/MajorCustomer";
import Home from "./pages/Home";
import ProductIntro from "./product/ProductIntro";
import ProductionLine from "./product/ProductionLine";
import Customer from "./customer/Customer";
import News from "./news/News";
import Login from "./sign/Login";
import SignUp from "./sign/SignUp";
import MeasurementFacility from "./product/MeasurementFacility";

class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/contact" element={<ContactForm />} />
            <Route path="/introduce" element={<Introduce />} />
            <Route path="/history" element={<History />} />
            <Route path="/license" element={<License />} />
            <Route path="/road" element={<Road />} />
            <Route path="/area" element={<Area />} />
            <Route path="/majorcustomer" element={<Majorcustomer />} />
            <Route path="/productintro" element={<ProductIntro />} />
            <Route path="/productionline" element={<ProductionLine />} />
            <Route path="/news" element={<News />} />
            <Route path="/customer" element={<Customer />} />
            <Route
              path="/measurementfacility"
              element={<MeasurementFacility />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
