import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Meme from "./components/Meme";
import RandomArray from "./components/RandomArray";
import BoxGrid from "./components/BoxGrid";
import Message from "./components/Message";
import StarWars from "./components/StarWars";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

function App() {

  return (
    <div>
      <Header />
      <nav className="navbar">
        <Link to="/" className="nav-item">
          Meme
        </Link>
        <Link to="/message" className="nav-item">
          Message
        </Link>
        <Link to="/random-array" className="nav-item">
          Array
        </Link>
        <Link to="/box-grid" className="nav-item">
          Grid
        </Link>
        <Link to="/star-wars" className="nav-item">
          SW
        </Link>
        <div className="dropdown">
          <button className="dropbtn">Forms ▼</button>
          <div className="dropdown-content">
            <Link to="/forms/form-1">Form 1</Link>
            <Link to="/forms/form-2">Form 2</Link>
            <Link to="/forms/form-3">Form 3</Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Meme />} />
        <Route path="/message" element={<Message />} />
        <Route path="/random-array" element={<RandomArray />} />
        <Route path="/box-grid" element={<BoxGrid />} />
        <Route path="/star-wars" element={<StarWars />} />
        <Route path="/forms/form-1" element={<Form1 />} />
        <Route path="/forms/form-2" element={<Form2 />} />
        <Route path="/forms/form-3" element={<Form3 />} />
      </Routes>
    </div>
  );
}

export default App;
