import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import ChatContent from "./components/ChatContent";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { auth } from "./firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./AuthContext";
import { useEffect } from "react";

function App() {
  const [user, setUser] = useState({});
  const [loggedOut, setLoggedOut] = useState(false);

  useEffect(() => {
    // Data persists on refresh
    const unsub = onAuthStateChanged(auth, (currentUser) => {
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
    return () => unsub();
  }, []);

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
          <Route path="/" element={<Login loggedOut={loggedOut} />} />
          <Route
            path="chat"
            element={
              <AuthProvider>
                <Chat signOut={signOutApp} />
              </AuthProvider>
            }
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
