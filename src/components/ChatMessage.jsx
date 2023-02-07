import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <UserImage>
        <img
          src="https://pbs.twimg.com/profile_images/868465228639592448/Nj6Tcjws_400x400.jpg"
          alt="User avatar"
        ></img>
      </UserImage>
      <MessageContent>
        <UserName>Dragan Mrljes</UserName>
        <Message>First Message</Message>
      </MessageContent>
    </Container>
  );
}

const Container = styled.div``;

const UserImage = styled.div`
  max-width: 50px;

  img {
    max-width: 50px;
    aspect-ratio: 1/1;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const MessageContent = styled.div``;

const UserName = styled.span``;

const Message = styled.p``;
export default ChatMessage;
