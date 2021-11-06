import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <p>Hello</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;
export default Home;
