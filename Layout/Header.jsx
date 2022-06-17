import React from "react";

import Navigation from "./Navigation";
import Credizest__HeroSection from "../Components/Hero_Section";

import { Header__Container } from "../styles/Credizest/Homepage/Header";

const Header = () => {
  return (
    <>
      <Header__Container>
        <Navigation />
        <Credizest__HeroSection />
      </Header__Container>
    </>
  );
};

export default Header;
