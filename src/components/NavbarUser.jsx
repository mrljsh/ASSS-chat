import styled from "styled-components";

const NavbarUser = ({ user }) => {
  const { name } = user;

  return (
    <Container>
      <UserName>{name}</UserName>
    </Container>
  );
};

export default NavbarUser;

const Container = styled.div`
  display: flex;
`;

const UserName = styled.span``;
