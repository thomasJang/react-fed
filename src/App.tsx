import React from "react";
import "./styles/index";
import MarkdownView from "./markdown/Markdown";

const App: React.FC = () => {
  return (
    <div style={{ padding: "0 20px" }}>
      <MarkdownView />
    </div>
  );
};

export default App;
