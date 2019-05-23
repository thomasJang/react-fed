import React from "react";
import "./styles/index";
import JoinForm from "./pages/form/JoinForm";

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <JoinForm email={"tom@chequer.io"} />
    </div>
  );
};

export default App;
