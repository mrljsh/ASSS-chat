import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiEnvelope, BiUser } from "react-icons/bi";

const Sidebar = ({ rooms, handleSidebar }) => {
  return (
    <Container>
      <SchoolSection>Одсек у Аранђеловцу</SchoolSection>
      <GroupContainer>
        <SidebarLink to="./" onClick={handleSidebar}>
          <BiEnvelope />
          Ваше приватне поруке
        </SidebarLink>
        <SidebarLink to="./profile/" onClick={handleSidebar}>
          <BiUser />
          Ваш профил
        </SidebarLink>
      </GroupContainer>
      <GroupContainer>
        <GroupName>Предмети</GroupName>
        {rooms.map((room) => (
          <SidebarLink
            to={`/chat/${room.id}`}
            key={room.id}
            onClick={handleSidebar}
          >
            # {room.name_sr}
          </SidebarLink>
        ))}
      </GroupContainer>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  background-color: white;
  overflow-y: auto;
  scrollbar-width: none;
  display: grid;
  grid-template-rows: 64px min-content auto;
  z-index: 9;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SchoolSection = styled.p`
  box-shadow: rgba(0, 0, 0, 0.075) 0px 2px 4px 0px;
  font-size: 1.5rem;
  text-align: center;
  line-height: 65px;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  padding: 8px 16px;
  color: #757575;
  transition: background-color 0.25s, color 0.15s, box-shadow 0.15s,
    opacity 0.25s, filter 0.25s, border 0.15s;
  appearance: none;
  text-decoration: none;
  display: flex;
  align-items: center;

  > svg {
    margin-right: 8px;
    font-size: 24px;
  }

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
