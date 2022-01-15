import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../components/Home/Home";
import { HomeWeb } from "../pages/Home/HomeWeb";
import LoginWeb from "../components/Login/Login";
import SignInWeb from "../components/SignIn/SignIn";
import Guide from "../pages/Guide";
import MisionVision from "../pages/misionvision/MisionVision";
import ServiceOffered from "../pages/servicesOffered/ServicesOffered";
import { Team } from "../pages/Team";
import Layouts from "./../layouts/Layout";
import NotFound from "../pages/NotFound";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Layouts>
        <Routes>
          <Route exact path="/home" element={<Home />} />

          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/guide" element={<Guide />} />
          <Route exact path="/mv" element={<MisionVision />} />
          <Route exact path="/services" element={<ServiceOffered />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/w3d" element={<HomeWeb />} />
          <Route exact path="/w3d/login" element={<LoginWeb />} />
          <Route exact path="/w3d/sign-in" element={<SignInWeb />} />
          <Route element={<Home />} />
          <Route exact path="/about" element={<About />} />

          <Route element={<NotFound />} />
        </Routes>
      </Layouts>
    </BrowserRouter>
  );
};
export default AppRouter;
