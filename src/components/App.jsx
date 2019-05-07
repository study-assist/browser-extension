import React from "react";
import "./../css/App.css";
import CurrentPageTagContainer from "./CurrentPageTagContainer.jsx";

function App() {
  const tags = ["fun", "notfun"];
  return (
    <div className="App">
      <CurrentPageTagContainer tags={tags} />
    </div>
  );
}

export default App;
