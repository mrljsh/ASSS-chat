import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
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
            path="/chat/*"
            element={<Chat userData={user} signOut={signOutApp} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
