import styled from "styled-components";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  return (
    <Wrapper>
      <div className="background-img"></div>
      <h3>Test</h3>
      <div className="scroll-up-btn" onClick={topFunction}>
        <BsFillArrowUpCircleFill />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    position: absolute;
    color: WHITE;
  }
  .scroll-up-btn {
    position: relative;
    background: transparent;
    cursor: pointer;
    padding-top: 1rem;
    top: 10%;
    left: 96%;
    font-size: 2rem;
    width: 5rem;
    background-color: transparent;
  }
  .background-img {
    position: absolute;
    left: 0;
    height: 20vh;
    width: 100vw;
    background-color: #1c3a13;
  }
`;
export default Footer;
