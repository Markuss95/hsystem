import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";
const Footer = () => {
  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const location = useLocation();

  return (
    <Wrapper>
      <div
        className={`horisontal-line ${
          location.pathname === "/" ? "hidden" : ""
        }`}
      ></div>
      <div className="background-img"></div>
      <div className="footer-content-container">
        <div className="footer-content">
          <Link to="/company">
            <p>Our Company</p>
          </Link>
          <Link to="/solarenergy">
            <p>Solar Energy</p>
          </Link>

          <Link to="sustainability">
            <p>Sustainability</p>
          </Link>
          <Link to="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div
        // className={`scroll-up-btn ${location.pathname === "/" ? "" : "hidden"}`}
        className="scroll-up-btn"
        onClick={topFunction}
      >
        <BsFillArrowUpCircleFill />
      </div>
      <div className="footer-company-container">
        <h4 className="footer-company">
          H System d.o.o &copy; {new Date().getFullYear()} All rights reserved.
        </h4>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    position: absolute;
    color: WHITE;
  }

  .background-img {
    position: absolute;
    left: 0;
    height: 20vh;
    width: 100vw;
    background-color: #b4bde2;
  }
  .scroll-up-btn {
    position: absolute;
    background: transparent;
    z-index: 999;
    cursor: pointer;
    padding-top: 1rem;
    right: 4%;
    font-size: 2rem;
    width: 2rem;
    background-color: transparent;
  }
  .footer-content-container {
    position: absolute;
    display: flex;
    width: 100vw;
    height: 20vh;
    justify-content: center;
    align-items: center;
  }
  .footer-content {
    display: grid;
    width: 20vw;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-row-gap: 0.7rem;
    z-index: 2;
    p {
      color: white;
    }
  }
  .footer-company-container {
    position: absolute;
    height: 20vh;
    width: 100vw;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
  }
  .footer-company {
    color: white;
    padding-left: 2rem;
    padding-bottom: 1rem;
  }
  .horisontal-line {
    height: 0.2vh;
    width: 100vw;
    background-color: white;
  }
  @media screen and (max-width: 800px) {
    .footer-content {
      display: flex;
      font-size: 0.8rem;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .footer-company-container {
      justify-content: center;
    }
    .footer-company {
      font-weight: 500;
      font-size: 0.8rem;
      padding-left: 0;
    }
    .scroll-up-btn {
      padding-top: 0.2rem;
    }
  }
`;
export default Footer;
