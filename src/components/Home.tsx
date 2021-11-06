import styled from "styled-components";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Wrapper>
      <h1>Hello</h1>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
export default Home;
