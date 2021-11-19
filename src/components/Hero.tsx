import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bcg from "../assets/pexels-andre-william-2104499 (2).jpg";
import logo from "../assets/LogoMakr-3ok5GN.png";
import waterDrop from "../assets/pexels-oleg-magni-2033981 (1).jpg";

const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};

const Hero = ({
  setScrollPos,
}: {
  setScrollPos: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrollPos(window.scrollY < 0.535 * window.innerHeight)
      );
    }
  });

  return (
    <Wrapper>
      <img className="background-img" src={bcg} alt="Grass" />
      <div className="waterdrop-img-container">
        <img className="waterdrop-img" src={waterDrop} alt="Waterdrop" />
      </div>
      <motion.div
        className="navbar"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <Link to="/">
          <img className="logo-img" src={logo} alt="H System" />
        </Link>
        <div className="navbar-list">
          <h3>Our company</h3>
          <h3>Sustainability</h3>
          <h3>Careers</h3>
        </div>
        <div className="menu">
          <p>Meni</p>
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  h3 {
    font-size: 1.2rem;
    color: #fff;
  }
  .background-img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  .navbar {
    position: relative;
    display: flex;
    justify-content: space-between;
  }
  .navbar-list {
    position: relative;
    display: flex;
    margin-right: 6rem;
    margin-top: 2.7rem;
    gap: 2rem;
  }
  .logo-img {
    position: relative;
    left: 30%;
  }
  .menu {
    position: absolute;
    color: #fff;
    font-size: 1.3rem;
    top: 0.5rem;
    right: 5%;
  }

  .waterdrop-img-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .waterdrop-img {
    object-fit: cover;
    position: fixed;
    height: 5rem;
    width: 5rem;
  }
  @media (max-width: 800px) {
    .logo-img {
      display: none;
    }
    .navbar-list {
      display: none;
    }
  }
  @media (min-width: 801px) {
    .menu {
      display: none;
    }
  }
`;
export default Hero;
