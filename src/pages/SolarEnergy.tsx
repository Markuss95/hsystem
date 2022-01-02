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

const SolarEnergy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <motion.div
        className="solar-power"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1>Solar Energy</h1>
        <p>
          The sun provides more than enough energy to meet the whole world's
        </p>
        <p>
          {" "}
          energy needs, and unlike fossil fuels, it won't run out anytime soon.
        </p>
      </motion.div>

      <motion.div
        className="our-farm"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h1>Our Farm</h1>
        <p>
          Installed on an area of over 12 hectares our power plants will be able
        </p>
        <p> to generate more than 12 megawatts of electricity.</p>
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
  .solar-power {
    position: absolute;
    top: 20%;
    padding-left: 12rem;
  }
  .our-farm {
    position: absolute;
    top: 70%;
    padding-left: 12rem;
  }
  @media (max-width: 1150px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .solar-power {
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }
    .our-farm {
      left: 0;
      right: 0;
      margin-left: auto;
      margin-right: auto;
    }
  }
  @media (max-width: 800px) {
    .solar-power {
      padding-left: 5rem;
      padding-right: 5rem;
      top: 10%;

      h1 {
        line-height: 3rem;
        margin-bottom: 1rem;
        font-size: 2.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
    .our-farm {
      padding-left: 5rem;
      padding-right: 5rem;
      top: 50%;
      h1 {
        line-height: 3rem;
        margin-bottom: 1rem;
        font-size: 2.2rem;
      }
      p {
        font-size: 1rem;
      }
    }
  }
`;
export default SolarEnergy;
