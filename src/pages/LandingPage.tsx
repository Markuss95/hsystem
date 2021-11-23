import { useState } from "react";
import Hero from "../components/Hero";
import LandingPageHydrogen from "../components/LandingPageHydrogen";
import LandingPageStation from "../components/LandingPageStation";
import styled from "styled-components";

const LandingPage = () => {
  const [scrollPos, setScrollPos] = useState(true);

  return (
    <Wrapper>
      <Hero setScrollPos={setScrollPos} scrollPos={scrollPos} />
      <LandingPageHydrogen scrollPos={scrollPos} />
      <LandingPageStation />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
`;
export default LandingPage;
