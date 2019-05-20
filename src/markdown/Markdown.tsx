import React from "react";
import Markdown from "markdown-to-jsx";
import mdContents from "./README.md";
interface IProps {}

class MarkdownView extends React.Component<IProps> {
  render() {
    return (
      <div>
        <Markdown>{mdContents}</Markdown>
      </div>
    );
  }
}

export default MarkdownView;
