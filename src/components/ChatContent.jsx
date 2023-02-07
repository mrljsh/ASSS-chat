import { useParams } from "react-router-dom";
import styled from "styled-components";

const ChatContent = () => {
  const { roomId } = useParams();

  return (
    <Container>
      <Header>
        <p>{roomId}</p>
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
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
`;

const MessagesContainer = styled.div``;

const UserInput = styled.div``;
