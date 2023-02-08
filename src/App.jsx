import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";

function App() {
  const [user, setUser] = useState();
  const [loggedOut, setLoggedOut] = useState(false);

  const getUser = (user) => {
    setUser(user);
  };

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
        {!user ? (
          <Login handleUser={getUser} loggedOut={loggedOut} />
        ) : (
          <Chat userData={user} signOut={signOutApp} />
        )}
      </Router>
    </div>
  );
}

export default App;
