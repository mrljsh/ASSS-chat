import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ChatContent from "./ChatContent";

const Chat = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    getChannels();
  }, []);

  const getChannels = async () => {
    const channels = collection(db, "rooms");
    const channelsSnapshot = await getDocs(channels);
    setRooms(channelsSnapshot.docs.map((channel) => channel.data()));
  };

  console.log(rooms);

  return (
    <Container>
      <Navbar />
      <Main>
        <Sidebar rooms={rooms} />
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
