import styled from "styled-components";
import { motion } from "framer-motion";
import solars from "../assets/pexels-tom-fisk-9893729.jpg";
import logo from "../assets/H System logo.png";

const navbarVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 },
  },
};

const Home = () => {
  return (
    <Wrapper>
      <img className="background-img" src={solars} alt="Solar Pannels" />
      <motion.div
        className="navbar"
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
      >
        <img className="logo-img" src={logo} alt="H System" />
        <div className="navbar-list">
          <h3>Our company</h3>
          <h3>Sustainability</h3>
          <h3>Careers</h3>
        </div>
        <div className="menu">
          <h3>Meni</h3>
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  h3 {
    font-size: 1.3rem;
    color: white;
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
    margin-right: 4.5rem;
    margin-top: 1.5rem;
    margin-left: 1rem;
    gap: 2rem;
  }
  .logo-img {
    position: relative;
    left: 5%;
    top: 0.5%;
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
export default Home;
