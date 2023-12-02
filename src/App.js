import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import RandomArray from "./components/RandomArray";
import Boxes from "./components/Boxes";

function App() {

  return (
    <div>
      <Header />
      <Meme />
      {/* <hr></hr> */}
      {/* <RandomArray /> */}
      <hr></hr>
      <Boxes />
    </div>
  );
}

export default App;
