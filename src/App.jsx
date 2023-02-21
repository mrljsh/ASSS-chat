import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import ChatContent from "./components/ChatContent";
import Login from "./components/Login";
import Profile from "./components/Profile";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import { AuthProvider } from "./AuthContext";

function App() {
  const [loggedOut, setLoggedOut] = useState(false);

  const signOutApp = () => {
    signOut(auth)
      .then(() => {
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
            <Route exact path="profile/" element={<Profile />} />
            <Route path="profile/:userId" element={<Profile />} />
            <Route path=":roomId" element={<ChatContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
