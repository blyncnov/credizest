import React from "react";

import Navigation from "./Navigation";
import Credizest__HeroSection from "../Components/Hero_Section";

import {
  Header__Container,
  Header__,
} from "../styles/Credizest/Homepage/Header";

const Header = () => {
  return (
    <Header__>
      <Header__Container>
        <Navigation />
        <Credizest__HeroSection />
      </Header__Container>
    </Header__>
  );
};

export default Header;
