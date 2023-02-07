import { useParams } from "react-router-dom";
import styled from "styled-components";

const ChatContent = () => {
  const { roomId } = useParams();

  return (
    <Container>
      <Header>
        <ChannelDetails>
          <ChannelName># {roomId} - Информациони системи</ChannelName>
          <ChannelDescription>
            Информационе системе предаје ...
          </ChannelDescription>
        </ChannelDetails>
      </Header>
      <MessagesContainer></MessagesContainer>
      <UserInput></UserInput>
    </Container>
  );
};

export default ChatContent;

const Container = styled.div`
  background-color: #f1f1f1;
  display: grid;
  grid-template-rows: 64px auto min-content;
`;

const Header = styled.div`
  background-color: white;
  padding: 8px 16px;
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
  font-weight: 300;
  color: #757575;
`;

const MessagesContainer = styled.div``;

const UserInput = styled.div``;
