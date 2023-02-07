import { useParams } from "react-router-dom";
import styled from "styled-components";

const ChatContent = () => {
  const { roomId } = useParams();

  return (
    <Container>
      <p>{roomId}</p>
    </Container>
  );
};

export default ChatContent;

const Container = styled.div`
  background-color: #f1f1f1;
`;
