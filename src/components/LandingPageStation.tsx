import styled from "styled-components";
import hydrogenStation from "../assets/HydrogenStation.jpg";
import hydrogenStationTwo from "../assets/HydrogenStation2.jpg";
const LandingPageStation = () => {
  return (
    <Wrapper>
      <img
        className="background-img-one"
        src={hydrogenStation}
        alt="Hydrogen Station"
      />
      <img
        className="background-img-two"
        src={hydrogenStationTwo}
        alt="Hydrogen Station"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .background-img-one {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
  .background-img-two {
    display: hidden;
  }
  @media screen and (max-width: 900px) {
    .background-img-one {
      display: none;
    }
    .background-img-two {
      display: inline-block;
      position: absolute;
      object-fit: cover;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
    }
  }
`;

export default LandingPageStation;
