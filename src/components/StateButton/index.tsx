import "./index.css";

type StateButtonProps = {
  state: boolean;
  setState: (value: boolean) => void;
};

export default function StateButton({ state, setState }: StateButtonProps) {
  return (
    <div className={state ? "stateButton_active" : ""}>
      <button
        onClick={() => {
          setState(!state);
        }}
        className="stateButton"
      >
        <div className="circle"></div>
        <div className="turn Off"></div>
        <div className="circle"></div>
      </button>
    </div>
  );
}
