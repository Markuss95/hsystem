import React, { useEffect } from "react";
import styled from "styled-components";
import bcg from "../assets/pexels-andre-william-2104499 (2).jpg";
import waterDrop from "../assets/Waterdrop2.png";

const Hero = ({
  setScrollPos,
  scrollPos,
}: {
  setScrollPos: React.Dispatch<React.SetStateAction<boolean>>;
  scrollPos: boolean;
}) => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollPos(window.scrollY < 0.533 * window.innerHeight)
    );
  });

  return (
    <Wrapper>
      <img className="background-img" src={bcg} alt="Grass" />
      <div className="waterdrop-img-container">
        <img
          className={`waterdrop-img ${!scrollPos ? "hidden" : ""}`}
          src={waterDrop}
          alt="Waterdrop"
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .background-img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
  }

  .logo-img {
    position: relative;
    left: 30%;
  }
  .hidden {
    display: none;
  }
  .waterdrop-img-container {
    position: absolute;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .waterdrop-img {
    object-fit: cover;
    position: fixed;
    height: 5rem;
    width: 5rem;
  }
`;
export default Hero;
