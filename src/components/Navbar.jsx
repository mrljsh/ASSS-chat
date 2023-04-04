import styled from "styled-components";
import NavbarUser from "./NavbarUser";
import ASSSLogo from "./../assets/logo-arandjelovac.png";
import { BiMenu } from "react-icons/bi";

const Navbar = ({ user, signOut, handleSidebar }) => {
  return (
    <Container>
      <MenuButton onClick={handleSidebar}>
        <BiMenu />
      </MenuButton>
      <Branding>
        <Img src={ASSSLogo} alt="ASSS logo" />
        <Heading>ASSS Chat</Heading>
      </Branding>
      {user && <NavbarUser user={user} signOut={signOut} />}
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  align-items: center;
  padding: 0 16px;
  z-index: 10;
  align-items: center;
  justify-content: space-between;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  all: unset;
  display: none;
  cursor: pointer;
  font-size: 48px;
  transition: 0.15s;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
