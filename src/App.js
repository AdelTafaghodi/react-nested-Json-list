import React from "react";
import Recursive from "./Components/Recursive";
import dataJson from "./data/data.json";

const App = () => {
  return <Recursive data={dataJson} />;
};

export default App;
