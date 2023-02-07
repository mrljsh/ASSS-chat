import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Container>
      <GroupContainer>
        <SidebarLink to="./">Ваше приватне поруке</SidebarLink>
        <SidebarLink to="./profile">Ваш профил</SidebarLink>
      </GroupContainer>
      <GroupContainer>
        <GroupName>Предмети</GroupName>
        <SidebarLink to="/chat/is"># информациони-системи</SidebarLink>
        <SidebarLink to="/chat/pr1"># програмирање-1</SidebarLink>
        <SidebarLink to="/chat/web"># web-програмирање</SidebarLink>
      </GroupContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: white;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  color: #757575;
  transition: background-color 0.25s, color 0.15s, box-shadow 0.15s,
    opacity 0.25s, filter 0.25s, border 0.15s;
  appearance: none;
  text-decoration: none;

  &:hover {
    background-color: #ccc;
    color: #000;
  }

  &.active {
    background-color: #1561b9;
    color: white;
  }
`;

const GroupContainer = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(204, 204, 204, 0.4);
`;

const GroupName = styled.p`
  padding: 8px 16px;
  margin-top: 24px;
  font-weight: 700;
  color: #757575;
`;
