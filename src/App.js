import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import MemeImage from "./components/MemeImage";
import memeData from "./memeData";

function App() {

  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

export default App;
