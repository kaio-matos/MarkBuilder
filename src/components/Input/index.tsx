import "./style.css";

type InputPropsType = {
  text: string;
  setText: (value: string) => void;
};

function getLineStart(text: string, selectionStart: number) {
  let lineStart = selectionStart;

  for (let j = lineStart; j !== -1; j--) {
    if (text[j] === "\n") {
      lineStart = j + 1;
      break;
    }
  }

  return lineStart;
}

// function addTabStringEnter(text: string, start: number, end: number) {
//   const line = text.substring(start, end);
//   const tabbedText = "\t" + line + "\n";

//   return tabbedText;
// }

function selectionTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
  const target = e.currentTarget;
  const allRawText = target.value;

  // Selections
  const selectionStart = target.selectionStart;
  const selectionEnd = target.selectionEnd;

  let lineStart = getLineStart(allRawText, selectionStart);

  // Get lines from first character of the line to last selected character
  const linesText = allRawText.substring(lineStart, selectionEnd);

  let lastEnter = 0;

  const lines = [];

  // Create array of lines
  for (let i = 0; i < linesText.length; i++) {
    const isLastCharacter = i === linesText.length - 1;
    const isEndOfLine = linesText[i] === "\n";
    const isFirstTime = lastEnter === 0;

    if (isEndOfLine || isLastCharacter) {
      if (isFirstTime) {
        lines.push(linesText.substring(lastEnter, i + 1));
        lastEnter = i;
      } else {
        lines.push(linesText.substring(lastEnter + 1, i + 1));
        lastEnter = i;
      }
    }
  }

  let tabbedText = "";
  lines.forEach((text) => {
    tabbedText = tabbedText + "\t" + text;
  });

  console.log(lines);
  return { tabbedText, lineStart };
}

function dealTab(e: React.KeyboardEvent<HTMLTextAreaElement>) {
  if (e.key === "Tab") {
    const element = e.currentTarget;
    e.preventDefault();
    const start = element.selectionStart;
    const end = element.selectionEnd;
    const isSelection = start - end !== 0;

    if (isSelection) {
      const { tabbedText, lineStart } = selectionTab(e);

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
        // onChange=
      ></textarea>
    </div>
  );
}
