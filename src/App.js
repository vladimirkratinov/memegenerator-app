import "./style.css";
import Header from "./components/Header";
import Meme from "./components/Meme";
import RandomArray from "./components/RandomArray";
import BoxGrid from "./components/BoxGrid";
import Message from "./components/Message";
import Form1 from "./components/Form1";
import Form2 from "./components/Form2";

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
      <Form2 />
      <hr></hr>
      <BoxGrid />
      
      
    </div>
  );
}

export default App;
