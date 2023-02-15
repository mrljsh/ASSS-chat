import styled from "styled-components";
import { BiUser, BiEnvelope } from "react-icons/bi";

const Profile = ({ user }) => {
  const { name, photo, email } = user;

  return (
    <Container>
      <h1>Профил</h1>
      <ProfileContainer>
        <ImageContainer>
          <img src={photo} alt={`${name} profilna slika`}></img>
        </ImageContainer>
        <div>
          <DataContainer>
            <BiUser />
            <Data>
              <p>Име и презиме:</p>
              <p>{name}</p>
            </Data>
          </DataContainer>
          <DataContainer>
            <BiEnvelope />
            <Data>
              <p>E-mail:</p>
              <p>{email}</p>
            </Data>
          </DataContainer>
        </div>
      </ProfileContainer>
    </Container>
  );
};

const Container = styled.div`
  padding: 8px 16px;
`;

const ProfileContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 8fr;
  padding: 16px;
`;

const ImageContainer = styled.div`
  > img {
    max-width: 200px;
  }
`;

const DataContainer = styled.div`
  margin-bottom: 16px;
  display: flex;
  align-items: center;

  > svg {
    font-size: 24px;
    margin-right: 8px;
  }
`;

const Data = styled.div`
  > * {
    margin: 4px 0;
  }
`;
export default Profile;
