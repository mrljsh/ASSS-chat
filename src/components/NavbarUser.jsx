import styled from "styled-components";

const NavbarUser = ({ user }) => {
  const { name, photo } = user;

  return (
    <Container>
      <UserName>{name}</UserName>
      <UserImage src={photo} alt={`${name} slika`} />
    </Container>
  );
};

export default NavbarUser;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-weight: 400;
  font-size: 1em;
  margin-right: 8px;
`;

const UserImage = styled.img`
  max-width: 42px;
  border-radius: 50%;
`;
