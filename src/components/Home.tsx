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
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    font-size: 1.3rem;
    color: white;
    padding-left: 2rem;
  }
  .background-img {
    position: absolute;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
  .navbar {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .navbar-list {
    position: relative;
    top: 25%;
    display: flex;
    justify-content: center;
    padding-left: 4rem;
    margin-right: 2rem;
  }
  .logo-img {
    position: relative;
    left: 5%;
    top: 0.5%;
  }

  @media (max-width: 700px) {
    .logo-img {
      display: none;
    }
  }
`;
export default Home;
