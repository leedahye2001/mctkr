// import React, { Component, useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   useNavigate,
// } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import NavBar from "./components/NavBar";
// import ContactForm from "./contact/ContactForm";
// import History from "./company/History";
// import Introduce from "./company/Introduce";
// import License from "./company/License";
// import Road from "./company/Road";
// import Area from "./business/Area";
// import Majorcustomer from "./business/MajorCustomer";
// import Home from "./pages/Home";
// import ProductIntro from "./product/ProductIntro";
// import ProductionLine from "./product/ProductionLine";
// import Customer from "./customer/Customer";
// import News from "./news/News";
// import Login from "./sign/Login";
// import ProtectedRoute from "./sign/ProtectRoute";
// import MeasurementFacility from "./product/MeasurementFacility";
// import { AuthContextProvider } from "./context/AuthContext";
// import { signOut } from "firebase/auth";
// import { auth } from "./firebase-config";

// function App() {
//   // const [active, setActive] = useState("home");
//   // const [user, setUser] = useState(null);
//   // const navigate = useNavigate();
//   // useEffect(() => {
//   //   auth.onAuthStateChanged((authUser) => {
//   //     if (authUser) {
//   //       setUser(authUser);
//   //     } else {
//   //       setUser(null);
//   //     }
//   //   });
//   // }, []);

//   // const handleLogout = () => {
//   //   signOut(auth).then(() => {
//   //     setUser(null);
//   //     setActive("login");
//   //     navigate("/login");
//   //   });
//   // };

//   return (
//     <Router>
//       <NavBar
//       // setActive={setActive}
//       // active={active}
//       // user={user}
//       // handleLogout={handleLogout}
//       />
//       <div>
//         <AuthContextProvider>
//           <ToastContainer position="top-center" />
//           <Routes>
//             <Route path="/" element={<Home />} exact />
//             <Route path="/contact" element={<ContactForm />} />
//             <Route path="/introduce" element={<Introduce />} />
//             <Route path="/history" element={<History />} />
//             <Route path="/license" element={<License />} />
//             <Route path="/road" element={<Road />} />
//             <Route path="/area" element={<Area />} />
//             <Route path="/majorcustomer" element={<Majorcustomer />} />
//             <Route path="/productintro" element={<ProductIntro />} />
//             <Route path="/productionline" element={<ProductionLine />} />
//             <Route path="/news" element={<News />} />
//             <Route path="/customer" element={<Customer />} />
//             <Route
//               path="/measurementfacility"
//               element={<MeasurementFacility />}
//             />
//             {/* <Route
//               path="/account"
//               element={
//                 <ProtectedRoute>
//                   <Account />
//                 </ProtectedRoute>
//               }
//             /> */}
//             <Route
//               path="/login"
//               element={
//                 <Login
//                 //  setActive={setActive} setUser={setUser}
//                 />
//               }
//             />
//             {/* <Route path="/signup" element={<SignUp />} /> */}
//           </Routes>
//         </AuthContextProvider>
//       </div>
//     </Router>
//   );
// }

// export default App;

import { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
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
import AddNews from "./news/AddNews";
import UpdateNews from "./news/UpdateNews";
import Login from "./sign/Login";
import MeasurementFacility from "./product/MeasurementFacility";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

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
      setActive("login");
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
          <Route
            path="/addnews"
            element={user?.uid ? <AddNews user={user} /> : <Navigate to="/" />}
          />
          <Route
            path="/updatenews"
            element={user?.uid ? <AddNews user={user} /> : <Navigate to="/" />}
          />
          <Route path="/customer" element={<Customer />} />
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
