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
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
      <motion.div
        className="contact-content"
        variants={variants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="contact-us-message">
          If you have the same passion for clean energy and technology.
        </h2>
        <h2 className="contact-us-message"> Or you just have a question...</h2>{" "}
        <h2 className="contact-us-message">
          {" "}
          Send us an email at: administration@hsystem.org
        </h2>
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
  .contact-us-message {
    color: white;
    text-align: left;
    padding-left: 1rem;
    line-height: 2.5rem;
  }
  @media (max-height: 670px) {
    h2 {
      font-size: 1rem;
    }
  }
`;
export default Contact;
