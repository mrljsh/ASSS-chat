import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

const Chat = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar />
        <Outlet />
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
  display: grid;
  grid-template-columns: 280px auto;
`;
