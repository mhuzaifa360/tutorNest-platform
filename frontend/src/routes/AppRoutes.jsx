import React from "react";
import { Route, Routes, useLocation } from "react-router";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StudentDashboard from "../pages/Dashboard/StudentDashboard";
import TutorDashboard from "../pages/Dashboard/TutorDashboard";
import Teachers from "../pages/Teachers";
import Courses from "../pages/Courses";

function AppRoutes() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/signup";

  return (
    <>
      {/* NAVBAR */}
       <Navbar />

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/courses" element={<Courses />} />
        <Route
          path="/studentdashboard"
          element={<StudentDashboard />}
        />
        <Route
          path="/tutordashboard"
          element={<TutorDashboard />}
        />
      </Routes>

      {/* FOOTER */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default AppRoutes;