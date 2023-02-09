import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import db, { auth } from "../firebase";
import { collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";

const Chat = ({ userData, signOut }) => {
  const [rooms, setRooms] = useState([]);
  const [user, setUser] = useState(userData);
  const navigate = useNavigate();

  onAuthStateChanged(auth, (currentUser) => {
    if (!currentUser) {
      navigate("../");
    }
  });

  useEffect(() => {
    const getChannels = () => {
      const unsub = onSnapshot(doc(collection(db, "rooms")), (doc) => {
        setRooms(doc.data());
      });

      return () => {
        unsub();
      };
    };

    getChannels();
  }, []);

  return (
    <Container>
      <Navbar user={user} signOut={signOut} />
      <Main>
        <Sidebar rooms={rooms} />
        <Outlet />
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
