import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chat from "./components/Chat";
import ChatContent from "./components/ChatContent";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chat" element={<Chat />}>
            <Route path="/chat/:roomId" element={<ChatContent />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
