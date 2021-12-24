import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from "../assets/LogoMakr-54Xxu5.png";
const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1 },
  },
};
const Navbar = ({
  menuState,
  setMenuState,
}: {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper variants={navbarVariants} initial="hidden" animate="visible">
      <Link to="/">
        <img className="logo-img" src={logo} alt="H System" />
      </Link>
      <div className="navbar-list">
        <Link to="/company">
          <h3>Our Company</h3>
        </Link>
        <h3>Solar Energy</h3>
        <Link to="/sustainability">
          <h3>Sustainability</h3>
        </Link>
        <Link to="/contact">
          <h3>Contact</h3>
        </Link>
      </div>
      <div className="menu">
        <p
          onClick={() => {
            setMenuState(!menuState);
          }}
          className="menu-btn"
        >
          Menu
        </p>
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
    height: 5.3rem;
    left: 80%;
  }
  .menu {
    position: relative;
    color: #fff;
    font-size: 1.3rem;
    top: 0.5rem;
    right: 5%;
  }
  .menu-btn {
    cursor: pointer;
  }
  @media (max-width: 1150px) {
    .logo-img {
      display: none;
    }
    .navbar-list {
      display: none;
    }
  }
  @media (min-width: 1151px) {
    .menu {
      display: none;
    }
  }
`;
export default Navbar;
