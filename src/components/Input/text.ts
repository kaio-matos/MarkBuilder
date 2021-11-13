import { Node } from "typescript";

export function TabSelectedText(
  selectionStart: number,
  selectionEnd: number,
  rawText: string
) {
  let lineStart = getLineStart(rawText, selectionStart);

  const selection = rawText.substring(lineStart, selectionEnd);

  const lines = getLines(selection);
  const tabbedText = addTabToLines(lines);

  return { tabbedText, lineStart };
}

export function getLineStart(text: string, selectionStart: number) {
  let lineStart = selectionStart;

  for (let j = lineStart; j !== -1; j--) {
    if (text[j] === "\n") {
      lineStart = j + 1;
      break;
    }
  }

  return lineStart;
}

function getLines(text: string) {
  const lines = [];
  let lastEnter = 0;

  for (let i = 0; i < text.length; i++) {
    const isLastCharacter = i === text.length - 1;
    const isEndOfLine = text[i] === "\n";
    const isFirstTime = lastEnter === 0;

    if (isEndOfLine || isLastCharacter) {
      // The first line don't have \n to
      if (isFirstTime) {
        const addLastCharacter = i + 1; // Add "\n" as last character
        lines.push(text.substring(lastEnter, addLastCharacter));
        lastEnter = i;
      } else {
        const excludeFirstCharacter = lastEnter + 1; // Remove "\n" as first character
        const addLastCharacter = i + 1; // Add "\n" as last character

        lines.push(text.substring(excludeFirstCharacter, addLastCharacter));
        lastEnter = i;
      }
    }
  }

  return lines;
}

function addTabToLines(lines: string[]) {
  let tabbedText = "";

  lines.forEach((text) => {
    tabbedText = tabbedText + "\t" + text;
  });

  return tabbedText;
}
