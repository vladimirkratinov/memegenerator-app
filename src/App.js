import "./style.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Meme from "./components/Meme";
import RandomArray from "./components/RandomArray";
import BoxGrid from "./components/BoxGrid";
import Message from "./components/Message";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";
import Form3 from "./components/Form3";

function App() {
  const Forms = () => (
    <div>
      Forms Page
      <ul>
        <li>
          <Link to="/forms/form-1">Form1</Link>
        </li>
        <li>
          <Link to="/forms/form-2">Form2</Link>
        </li>
        <li>
          <Link to="/forms/form-3">Form3</Link>
        </li>
      </ul>
    </div>
  );

  const FormsLinks = ({ match }) => (
    <div>
      <p>{match.params.id}</p>
    </div>
  );

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
          RandomArray
        </Link>
        <Link to="/box-grid" className="nav-item">
          Box Grid
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
        <Route path="/forms/form-1" element={<Form1 />} />
        <Route path="/forms/form-2" element={<Form2 />} />
        <Route path="/forms/form-3" element={<Form3 />} />
      </Routes>
    </div>
  );
}

export default App;
