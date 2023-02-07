import styled from "styled-components";
import ASSSLogo from "./../assets/logo-arandjelovac.png";

const Login = () => {
  return (
    <Container>
      <LoginContainer>
        <ImageContainer
          src={ASSSLogo}
          alt="Akademija Strukovnih studija Sumadija logo"
        />
        <Text>Пријава на апликацију ASSS Chat</Text>
        <Button>Пријавите се путем Google</Button>
      </LoginContainer>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 400px;
  padding: 16px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 24px 0;
  }
`;

const Text = styled.h1`
  text-align: center;
`;

const Button = styled.button`
  all: unset;
  padding: 8px 16px;
  background-color: #237be7;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
`;

const ImageContainer = styled.img``;
