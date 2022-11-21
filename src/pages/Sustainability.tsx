import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
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

const Sustainability = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <motion.div
        className="text-container"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <div className="first-text">
          <h2>
            We produce the only 100% sustainable and commercially viable
            hydrogen known also as "green hydrogen". Sustainability isn't just a
            word we throw around, it is imperative for us all. Timelines to
            react to growing environmental challenges are getting shorter. For
            that reason, sustainability is at the center of our overall firm
            strategy.
          </h2>
        </div>
        <div className="second-text">
          <h2>
            {" "}
            Our hydrogen is produced by electrolysis. Electrolysis is a
            technique used to produce hydrogen that consists of "breaking" the
            water molecules using an electric current in an electrolyzer in
            order to extract the dihydrogen. The electricity itself is carbon
            free and is produced by our own solar energy farm.
          </h2>
        </div>
      </motion.div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #b4bde2;
  .text-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 4rem;
    margin-left: 20rem;
    margin-right: 20rem;
    h2 {
      color: white;
      text-align: left;
      /* padding-left: 1rem; */
      line-height: 2.5rem;
    }
  }
  @media screen and (max-width: 1400px) {
    .text-container {
      h2 {
        line-height: 2rem;
        font-size: 1rem;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .second-text {
      display: none;
    }
    .text-container {
      display: grid;
      grid-template-columns: 1fr;
      margin-right: 10rem;
      margin-left: 10rem;
    }
  }
  @media screen and (max-width: 550px) {
    .text-container {
      margin-left: 5rem;
      margin-right: 5rem;
    }
  }
  @media screen and (max-width: 350px) {
    .text-container {
      margin-left: 2rem;
      margin-right: 2rem;
    }
  }
`;
export default Sustainability;
