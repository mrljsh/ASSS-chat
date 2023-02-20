import Navbar from "./Navbar";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import db, { auth } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../AuthContext";

const Chat = ({ signOut }) => {
  const [rooms, setRooms] = useState([]);
  const navigate = useNavigate();
  const { userData } = useAuthContext();

  useEffect(() => {
    // Gets channels information from firebase db
    const getChannels = async () => {
      const channels = collection(db, "rooms");
      const channelsSnapshot = await getDocs(channels);
      setRooms(channelsSnapshot.docs.map((channel) => channel.data()));
    };

    const userLoggedOut = () => {
      //If there's no authenticated user, redirects to / (login)
      const unsub = onAuthStateChanged(auth, (authUser) => {
        !authUser && navigate("/");
      });

      return () => {
        unsub();
      };
    };

    userLoggedOut();
    getChannels();
  }, [navigate]);

  return (
    <Container>
      <Navbar user={userData} signOut={signOut} />
      <Main>
        <Sidebar rooms={rooms} />
        <Outlet context={rooms} />
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
