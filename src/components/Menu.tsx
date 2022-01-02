import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const containerVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: "0vw",
    transition: { ease: "easeInOut", duration: 0.35 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut", duration: 2 },
  },
};
const Menu = ({
  menuState,
  setMenuState,
}: {
  menuState: boolean;
  setMenuState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <Wrapper
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="menu-wrapper">
        {" "}
        <Link to="/company" onClick={() => setMenuState(!menuState)}>
          <h3>Our Company</h3>
        </Link>
        <Link to="/solarenergy" onClick={() => setMenuState(!menuState)}>
          <h3>Solar Energy</h3>
        </Link>
        <Link to="/sustainability" onClick={() => setMenuState(!menuState)}>
          <h3>Sustainability</h3>
        </Link>
        <Link to="/contact" onClick={() => setMenuState(!menuState)}>
          <h3>Contact</h3>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #b4bde2;
  z-index: 9999;
  .menu-wrapper {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: #b4bde2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    h3 {
      font-size: 1.2rem;
      color: white;
    }
  }
`;

export default Menu;
