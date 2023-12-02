import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import RandomArray from "./components/RandomArray";
import BoxGrid from "./components/BoxGrid";

function App() {
  return (
    <div>
      <Header />
      <Meme />
      <hr></hr>
      <RandomArray />
      <hr></hr>
      <BoxGrid />
    </div>
  );
}

export default App;
