import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/LogoMakr-3ok5GN.png";
const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};
const Navbar = () => {
  return (
    <Wrapper variants={navbarVariants} initial="hidden" animate="visible">
      <Link to="/">
        <img className="logo-img" src={logo} alt="H System" />
      </Link>
      <div className="navbar-list">
        <h3>Our Company</h3>
        <h3>Solar Energy</h3>
        <h3>Sustainability</h3>
        <h3>Contact</h3>
      </div>
      <div className="menu">
        <p>Meni</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  h3 {
    font-size: 1.2rem;
    color: #fff;
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
    position: relative;
    color: #fff;
    font-size: 1.3rem;
    top: 0.5rem;
    right: 5%;
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
export default Navbar;
