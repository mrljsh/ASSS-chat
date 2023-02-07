import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState();

  const getUser = (user) => {
    setUser(user);
  };

  return (
    <div className="App">
      <Router>
        {!user ? <Login handleUser={getUser} /> : <Chat userData={user} />}
      </Router>
    </div>
  );
}

export default App;
