import Markdown from "markdown-to-jsx";
import "./style.css";
import "./markdown.css";

type OutputPropsType = {
  text: string;
};

export default function Output({ text }: OutputPropsType) {
  return (
    <div className="output_container">
      <Markdown>{text}</Markdown>
    </div>
  );
}
