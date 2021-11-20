import styled from "styled-components";
import hydrogen from "../assets/shutterstock_10926873743.png";
import two from "../assets/shutterstock_1092687374.4.png";

const LandingPageHydrogen = ({ scrollPos }: { scrollPos: boolean }) => {
  return (
    <Wrapper>
      <div className="hydrogen-img-container">
        <img
          className={`hydrogen-img ${scrollPos ? "hidden" : ""}`}
          src={hydrogen}
          alt="Hydrogen"
        />
        <img
          className={`two-img ${scrollPos ? "hidden" : ""}`}
          src={two}
          alt="Two"
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
    transform: translate(-50%, -51%);
    height: 8rem;
    width: 8rem;
  }
  .two-img {
    object-fit: cover;
    position: fixed;
    margin-left: 4.5rem;
    left: 50%;
    top: 57%;
    transform: translate(-50%, -57%);
    height: 12rem;
    width: 12rem;
  }
  @media screen and (min-width: 900px) {
    .hydrogen-img {
      height: 13rem;
      width: 13rem;
    }
    .two-img {
      height: 20rem;
      width: 20rem;
      margin-left: 8rem;
      left: 50%;
      top: 61%;
      transform: translate(-50%, -61%);
    }
  }
`;
export default LandingPageHydrogen;
