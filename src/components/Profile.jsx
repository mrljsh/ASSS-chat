import styled from "styled-components";
import { BiUser, BiEnvelope, BiKey } from "react-icons/bi";
import { useAuthContext } from "../AuthContext";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../firebase";

const Profile = () => {
  const [user, setUser] = useState({});
  const { name, photo, email, index } = user;
  const { userId } = useParams();
  const { userData } = useAuthContext();
  const searchUserId = userId || userData?.uid;

  useEffect(() => {
    const getUserData = async () => {
      const userRef = doc(db, "users", searchUserId);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setUser(userSnap.data());
      } else {
        console.log("err, no document");
      }
    };

    getUserData();
  }, [searchUserId]);

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
          <DataContainer>
            <BiKey />
            <Data>
              <p>Број индекса:</p>
              <p>{index}</p>
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
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 8fr;
  }
`;

const ImageContainer = styled.div`
  > img {
    width: 200px;
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
