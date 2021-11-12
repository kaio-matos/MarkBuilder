import "./style.css";

type InputPropsType = {
  setText: (value: string) => void;
};

export default function Input({ setText }: InputPropsType) {
  return (
    <div className="input_container">
      <textarea
        spellCheck="false"
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
      ></textarea>
    </div>
  );
}