import styled from "styled-components";
import ASSSLogo from "./../assets/logo-arandjelovac.png";

const Navbar = () => {
  return (
    <Container>
      <Branding>
        <Img src={ASSSLogo} alt="ASSS logo" />
        <Heading>ASSS Chat</Heading>
      </Branding>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  align-items: center;
  padding: 0 16px;
`;

const Heading = styled.h1`
  color: #227ae7;
`;

const Branding = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  max-width: 80px;
`;
