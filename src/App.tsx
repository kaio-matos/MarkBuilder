import { useEffect, useState } from "react";
import initialValue from "./initialValue";
import Header from "./components/Header";
import Input from "./components/Input";
import Output from "./components/Output";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [activeDark, setActiveDark] = useState(true);

  useEffect(() => {
    setText(initialValue);
  }, []);

  return (
    <div className={`App ${activeDark ? "dark_mode" : ""}`}>
      <Header darkState={activeDark} setDarkState={setActiveDark} />
      <div className="container">
        <Input text={text} setText={setText} />
        <Output text={text} />
      </div>
    </div>
  );
}

export default App;
