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
    const storagedText = localStorage.getItem("text");

    if (storagedText) setText(storagedText);
    else setText(initialValue);
  }, []);

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

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
