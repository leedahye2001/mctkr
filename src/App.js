import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import History from "./company/History";
import Introduce from "./company/Introduce";
import License from "./company/License";
import Road from "./company/Road";
import Area from "./business/Area";
import Majorcustomer from "./business/MajorCustomer";
import Home from "./pages/Home";
import ProductIntro from "./product/ProductIntro";
import ProductionLine from "./product/ProductionLine";
import Notice from "./customer/Notice";
import Contact from "./customer/Contact";
import News from "./news/News";
import AddNews from "./news/AddNews";
import AddNotice from "./customer/AddNotice";
import Login from "./sign/Login";
import MeasurementFacility from "./product/MeasurementFacility";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import NewsDetail from "./news/NewsDetail";

function App() {
  const [active, setActive] = useState("home");
  const [user, setUser] = useState(null);

  // const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  const handleLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      // setActive("login");
      // navigate("/login");
    });
  };

  return (
    <Router>
      <NavBar
        setActive={setActive}
        active={active}
        user={user}
        handleLogout={handleLogout}
      />
      <div>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/history" element={<History />} />
          <Route path="/license" element={<License />} />
          <Route path="/road" element={<Road />} />
          <Route path="/area" element={<Area />} />
          <Route path="/majorcustomer" element={<Majorcustomer />} />
          <Route path="/productintro" element={<ProductIntro />} />
          <Route path="/productionline" element={<ProductionLine />} />
          <Route
            path="/notice"
            element={<Notice setActive={setActive} user={user} />}
          />
          <Route
            path="/addnotice"
            element={
              user?.uid ? <AddNotice user={user} /> : <Navigate to="/" />
            }
          />
          <Route
            path="/updatenotice/:id"
            element={
              user?.uid ? (
                <AddNotice user={user} setActive={setActive} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/news"
            element={<News setActive={setActive} user={user} />}
          />
          <Route
            path="/addnews"
            element={user?.uid ? <AddNews user={user} /> : <Navigate to="/" />}
          />

          <Route
            path="/newsdetail/:id"
            element=<NewsDetail setActive={setActive} />
          />
          <Route
            path="/updatenews/:id"
            element={
              user?.uid ? (
                <AddNews user={user} setActive={setActive} />
              ) : (
                <Navigate to="/" />
              )
            }
          />
          <Route
            path="/measurementfacility"
            element={<MeasurementFacility />}
          />
          <Route
            path="/login"
            element={<Login setActive={setActive} setUser={setUser} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
