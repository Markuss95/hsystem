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
      <div className="hydrogen-text-container">
        <h3 className="hydrogen-text">
          Our focuses are enviroment and energy. Using sun energy to produce
          zero emission hydrogen is our mission.
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  background: #b4bde2;

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
    left: 47%;
    top: 51%;
    transform: translate(-47%, -51%);
    height: 8rem;
    width: 8rem;
  }
  .hydrogen-text-container {
    position: relative;
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
  }
  .hydrogen-text {
    color: white;
    margin-left: 1rem;
    font-size: 1rem;
  }
  .two-img {
    object-fit: cover;
    position: fixed;
    margin-left: 4.5rem;
    left: 47%;
    top: 57%;
    transform: translate(-47%, -57%);
    height: 12rem;
    width: 12rem;
  }
  @media screen and (min-width: 900px) {
    .hydrogen-img {
      height: 13rem;
      width: 13rem;
      left: 50%;
      top: 51%;
      transform: translate(-50%, -51%);
    }
    .two-img {
      height: 20rem;
      width: 20rem;
      margin-left: 8rem;
      left: 50%;
      top: 61%;
      transform: translate(-50%, -61%);
    }
    .hydrogen-text {
      color: white;
      font-size: 2rem;
      margin-left: 2rem;
    }
  }
`;
export default LandingPageHydrogen;
