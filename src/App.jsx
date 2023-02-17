import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import ChatContent from "./components/ChatContent";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState({});
  const [loggedOut, setLoggedOut] = useState(false);

  const getUser = (user) => {
    setUser(user);
  };

  // Data persists on refresh
  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser) {
      const user = {
        uid: currentUser.uid,
        name: currentUser.displayName,
        photo: currentUser.photoURL,
        email: currentUser.email,
      };
      setUser(user);
    }
  });

  const signOutApp = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setLoggedOut(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Login handleUser={getUser} loggedOut={loggedOut} />}
          />
          <Route
            path="chat"
            element={<Chat userData={user} signOut={signOutApp} />}
          >
            <Route index element={<p>Privatne poruke</p>}></Route>
            <Route path="profile" element={<Profile user={user} />} />
            <Route path=":roomId" element={<ChatContent user={user} />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
