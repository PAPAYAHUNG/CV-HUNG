import React, { useState, useEffect } from "react";
import NormalizeStyle from "./Global/normalizeStyle";
import { Contact, Home, Loader } from "./pages";
import "./Global/ScrollBar.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import ModalDetailProject from "./pages/ModalProjectDetail/ModalDetailProject";
import EMovieExplantion from "./pages/ModalProjectDetail/EMovieExplanation/EMovieExplantion";
import DashboardAdminExplanation from "./pages/ModalProjectDetail/DashboardAdminExplanation/DashboardAdminExplanation";

export const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);
  return (
    <>
      <NormalizeStyle />
      <AnimatePresence exitBeforeEnter>
        {/* <ModalDetailProject/> */}
        <Routes location={location} key={location.key}>
          <Route exact path="/" element={loading ? <Loader /> : <Home />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/E-Movie-Explanation" element={<EMovieExplantion />} />
          <Route exact path="/Dashboard-Admin-Explanation" element={<DashboardAdminExplanation />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};
