import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import "./App.css";
import { Navbar, Home } from "./components";
import Feed from "./components/Feed";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/post" element={<Feed />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
