import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/NavBar/Navbar";
import Footer from "./Components/Footer/Footer";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Profile from "./Pages/Profile";
import ServiceDetails from "./Pages/ServiceDetails";
import Orders from "./Pages/Orders";

function App() {
  const isAuth = useSelector((state) => state.userReducer.isAuth); // Redux state for authentication
  const location = useLocation();

  const hidenavbar =
    location.pathname.toLowerCase().includes("/login") ||
    location.pathname.toLowerCase().includes("/register");

  const PrivateRoute = ({ children }) => {
    return isAuth ? children : <Navigate to="/login" />;
  };

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    // Optionally, dispatch an action to update `isAuth` in Redux state
    // dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="App">
      {!hidenavbar && <Navbar auth={isAuth} logout={handleLogout} />}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/services/details" element={<ServiceDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/user"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/user" /> : <Login />}
        />
        <Route
          path="/register"
          element={isAuth ? <Navigate to="/user" /> : <Register />}
        />
      </Routes>
      {!hidenavbar && <Footer />}
    </div>
  );
}

export default App;
