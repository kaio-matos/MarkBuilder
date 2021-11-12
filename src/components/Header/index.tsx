import StateButton from "../StateButton";
import "./style.css";

type HeaderProps = {
  darkState: boolean;
  setDarkState: (value: boolean) => void;
};

export default function Header({ darkState, setDarkState }: HeaderProps) {
  return (
    <header>
      <div></div>
      <div>
        <h1>MarkBuilder</h1>
      </div>
      <div>
        <StateButton state={darkState} setState={setDarkState} />
      </div>
    </header>
  );
}
