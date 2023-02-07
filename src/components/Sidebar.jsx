import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <SidebarLink>Vase privatne poruke</SidebarLink>
      <SidebarLink>Vas profil privatne poruke</SidebarLink>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: white;
`;

const SidebarLink = styled.a`
  display: block;
  padding: 8px 16px;
  color: #757575;
  transition: background-color 0.25s, color 0.15s, box-shadow 0.15s,
    opacity 0.25s, filter 0.25s, border 0.15s;

  &:hover {
    background-color: #ccc;
    color: #000;
  }

  &.active {
    background-color: #1561b9;
    color: white;
  }
`;
