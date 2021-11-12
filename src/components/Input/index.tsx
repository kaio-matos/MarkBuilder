import "./style.css";

type InputPropsType = {
  text: string;
  setText: (value: string) => void;
};

export default function Input({ text, setText }: InputPropsType) {
  return (
    <div className="input_container">
      <textarea
        spellCheck="false"
        defaultValue={text}
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
      ></textarea>
    </div>
  );
}
