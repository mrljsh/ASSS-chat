import Navbar from "./Navbar";
import styled from "styled-components";

const Chat = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <p>Test</p>
      </Main>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px auto;
  height: 100vh;
`;

const Main = styled.div`
  display: flex;
`;
