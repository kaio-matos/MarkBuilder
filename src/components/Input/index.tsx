import "./style.css";
import { TabSelectedText } from "./text";

type InputPropsType = {
  text: string;
  setText: (value: string) => void;
};

function dealTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
  if (e.key === "Tab") {
    const element = e.currentTarget;
    e.preventDefault();
    const start = element.selectionStart;
    const end = element.selectionEnd;
    const isSelection = start - end !== 0;

    if (isSelection) {
      const { tabbedText, lineStart } = TabSelectedText(
        start,
        end,
        element.value
      );

      element.value =
        element.value.substring(0, lineStart) +
        tabbedText +
        element.value.substring(end);
    } else {
      element.value =
        element.value.substring(0, start) + "\t" + element.value.substring(end);
    }

    element.selectionStart = element.selectionEnd = start + 1;
  }
}

export default function Input({ text, setText }: InputPropsType) {
  return (
    <div className="input_container">
      <textarea
        spellCheck="false"
        onKeyDown={dealTab}
        defaultValue={text}
        onKeyUp={(e) => {
          setText(e.currentTarget.value);
        }}
      ></textarea>
    </div>
  );
}
