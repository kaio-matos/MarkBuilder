import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";

function App() {
  const [text, setText] = useState("");
  const [activeDark, setActiveDark] = useState(true);

  return (
    <div className={`App ${activeDark ? "dark_mode" : ""}`}>
      <Header darkState={activeDark} setDarkState={setActiveDark} />
      <div className="container">
        <Input setText={setText} />
        <Output text={text} />
      </div>
    </div>
  );
}

export default App;
