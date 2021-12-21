import styled from "styled-components";
import { useEffect } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

const OurCompany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <motion.div
        className="our-mission"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1>OUR MISSION</h1>
        <p>H System's mission is production of ecologically</p>{" "}
        <p>neutral, reliable, energy for everyone.</p>
      </motion.div>

      <motion.div
        className="about-us"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1>About us</h1>
        <p>We are a group of individuals united over a common </p>
        <p> goal: making our planet a better place through innovation.</p>
        <p>With green hydrogen and solar energy being our focus points.</p>
      </motion.div>
      <div></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background-color: #b4bde2;
  h1 {
    color: white;
    font-size: 2.7rem;
  }
  p {
    line-height: 1.7rem;
    color: white;
    font-size: 1.1rem;
  }
  .our-mission {
    position: absolute;
    top: 20%;
    padding-left: 12rem;
  }
  .about-us {
    position: absolute;
    top: 70%;
    padding-left: 12rem;
  }
`;
export default OurCompany;
