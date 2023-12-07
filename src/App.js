import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import RandomArray from "./components/RandomArray";
import BoxGrid from "./components/BoxGrid";
import Message from "./components/Message";
import Form1 from "./components/Form1";

function App() {
  return (
    <div>
      <Header />
      <Meme />
      <hr></hr>
      <Message />
      <hr></hr>
      <RandomArray />
      <hr></hr>
      <Form1 />
      <hr></hr>
      <BoxGrid />
      
      
    </div>
  );
}

export default App;
