import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Input setText={setText} />
        <Output text={text} />
      </div>
    </div>
  );
}

export default App;
