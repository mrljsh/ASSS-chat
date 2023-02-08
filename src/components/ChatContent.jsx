import { useParams } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import db from "./../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

const ChatContent = () => {
  const { roomId } = useParams();
  const [channel, setChannel] = useState({});
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getChannel = async () => {
      const docRef = doc(db, "rooms", roomId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setChannel(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };
    getChannel();
    getMessages();
  }, [roomId]);

  function getMessages() {
    return onSnapshot(
      query(
        collection(db, "rooms", roomId, "chat"),
        orderBy("timestamp", "asc")
      ),
      (querySnapshot) => {
        const messages = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messages);
      }
    );
  }

  return (
    <Container>
      <Header>
        <ChannelDetails>
          <ChannelName># {channel.name_sr}</ChannelName>
          <ChannelDescription>
            ESPB: {channel.espb} | Статус:{" "}
            {channel.obavezan ? "Обавезан" : "Изборни"} | Семестар:{" "}
            {channel.semester}
          </ChannelDescription>
        </ChannelDetails>
      </Header>
      <MessagesContainer>
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </MessagesContainer>
      <ChatInput />
    </Container>
  );
};

export default ChatContent;

const Container = styled.div`
  background-color: #f1f1f1;
  display: grid;
  grid-template-rows: 64px auto min-content;
  overflow-y: auto;
`;

const Header = styled.div`
  background-color: white;
  padding: 8px 24px;
`;

const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ChannelName = styled.p`
  font-weight: 500;
  font-size: 1.25em;
`;

const ChannelDescription = styled.p`
  margin-top: 4px;
  font-weight: 300;
  color: #757575;
`;

const MessagesContainer = styled.div`
  overflow-y: auto;
`;
