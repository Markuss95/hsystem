import Hero from "../components/Hero";
import LandingPageHydrogen from "../components/LandingPageHydrogen";
import styled from "styled-components";

const LandingPage = () => {
  return (
    <Wrapper>
      <Hero />
      <LandingPageHydrogen />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 200vh;
  width: 100vw;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
`;
export default LandingPage;
