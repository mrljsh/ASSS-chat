import styled from "styled-components";
import { useState } from "react";
import { BiSend } from "react-icons/bi";

const ChatInput = ({ sendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (message === "") return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <Container>
      <FormContainer>
        <form onSubmit={(e) => handleSend(e)}>
          <input
            type="text"
            placeholder="Унесите Вашу поруку..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">
            <BiSend />
          </button>
        </form>
      </FormContainer>
    </Container>
  );
};

export default ChatInput;

const Container = styled.div`
  padding: 8px 16px;
`;

const FormContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  background-color: white;
  padding: 0 16px;

  form {
    height: 48px;
    display: flex;

    input {
      flex: 1;
      outline: none;
      border: none;
      background-image: none;
      background-color: transparent;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
      box-shadow: none;
      font-size: 16px;
    }

    button {
      all: unset;
      font-size: 32px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.15s;
    }

    button:hover {
      color: #1561b9;
    }
  }
`;
