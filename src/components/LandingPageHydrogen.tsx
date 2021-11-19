import styled from "styled-components";

import hydrogen from "../assets/shutterstock_10926873743.png";

const LandingPageHydrogen = ({ scrollPos }: { scrollPos: boolean }) => {
  return (
    <Wrapper>
      <div className="hydrogen-img-container">
        <img
          className={`hydrogen-img ${scrollPos ? "hidden" : ""}`}
          src={hydrogen}
          alt="Hydrogen"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: white;

  .hidden {
    display: none;
  }
  .hydrogen-img-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .hydrogen-img {
    object-fit: cover;
    position: fixed;
    left: 50%;
    top: 51%;
    transform: translate(-51%, -50%);
    height: 8rem;
    width: 8rem;
  }
`;
export default LandingPageHydrogen;
