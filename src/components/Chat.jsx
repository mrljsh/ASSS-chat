import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import ChatContent from "./ChatContent";

const Chat = () => {
  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar />
        <Routes>
          <Route path="/" element={<p>Privatne poruke</p>}></Route>
          <Route path="/profile" element={<p>Profil</p>} />
          <Route path="/:roomId" element={<ChatContent />} />
        </Routes>
      </Main>
    </Container>
  );
};

export default Chat;

const Container = styled.div`
  display: grid;
  grid-template-rows: 60px calc(100vh - 60px);
  height: 100vh;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
`;
