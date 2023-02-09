import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import db, { auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import ChatContent from "./ChatContent";

const Chat = ({ userData, signOut }) => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate("../");
    }
  });

  useEffect(() => {
    setUser(userData);
    getChannels();
  }, [userData]);

  const getChannels = async () => {
    const channels = collection(db, "rooms");
    const channelsSnapshot = await getDocs(channels);
    setRooms(channelsSnapshot.docs.map((channel) => channel.data()));
  };

  return (
    <Container>
      <Navbar user={user} signOut={signOut} />
      <Main>
        <Sidebar rooms={rooms} />
        <Routes>
          <Route path="/" element={<p>Privatne poruke</p>}></Route>
          <Route path="/profile" element={<p>Profil</p>} />
          <Route path="/:roomId" element={<ChatContent user={user} />} />
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
