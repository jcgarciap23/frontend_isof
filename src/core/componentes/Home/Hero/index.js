import React, { useState } from 'react';
import Navbar from '../NavbarHome';
import Sidebar from '../../sideBar';
import { Link } from "react-router-dom";
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroP,
  HeroBtn
} from './HeroElements';

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>BRÍNDALE UN HOGAR A UN ANIMAL</HeroH1>
          <HeroP>Denuncia el abuso animal</HeroP>
          <Link className="nav-link" to="/iniciarsesion">
              <HeroBtn>ACCEDER</HeroBtn>
          </Link>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
