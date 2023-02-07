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
        <UserName>
          Драган Мрљеш <span>7/2/2023 - 18:29</span>
        </UserName>
        <Message>First Message</Message>
      </MessageContent>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
`;

const UserImage = styled.div`
  max-width: 42px;
  margin-top: 8px;

  img {
    max-width: 42px;
    aspect-ratio: 1/1;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 8px;
  padding: 8px 16px;
  background-color: white;
  border-radius: 24px;
  transition: 0.3s;

  &:hover {
    background-color: #dfdfdf;
  }
`;

const UserName = styled.span`
  font-weight: 500;
  font-size: 1.15em;

  span {
    font-weight: 300;
    font-size: smaller;
    margin-left: 4px;
    color: rgb(97, 97, 97);
  }
`;

const Message = styled.p`
  font-weight: 400;
  color: #393939;
  margin-top: 4px;
`;
export default ChatMessage;
