import styled from "styled-components";
import hydrogenStation from "../assets/HydrogenStation.jpg";
const LandingPageStation = () => {
  return (
    <Wrapper>
      <img
        className="background-img"
        src={hydrogenStation}
        alt="Hydrogen Station"
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;

  .background-img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }
`;

export default LandingPageStation;
