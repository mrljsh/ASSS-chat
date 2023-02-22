import styled from "styled-components";
import ASSSLogo from "./../assets/logo-arandjelovac.png";
import db, { auth, provider } from "../firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";

const Login = ({ loggedOut }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        navigate("/chat");
      }
    });

    return () => {
      unsub();
    };
  });

  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      const queryUser = query(
        collection(db, "users"),
        where("id", "==", user.uid)
      );
      const docs = await getDocs(queryUser);
      if (docs.docs.length === 0) {
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          name: user.displayName,
          photo: user.photoURL,
          email: user.email,
          index: prompt("Unesite broj indeksa: "),
        });
      }
      navigate("/chat");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <LoginContainer>
        {loggedOut && <LoggedOutSpan>Успешно сте се излоговали.</LoggedOutSpan>}
        <ImageContainer
          src={ASSSLogo}
          alt="Akademija Strukovnih studija Sumadija logo"
        />
        <Text>Пријава на апликацију ASSS Chat</Text>
        <Button onClick={() => signIn()}>Пријавите се путем Google</Button>
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

const LoggedOutSpan = styled.span`
  color: red;
`;
