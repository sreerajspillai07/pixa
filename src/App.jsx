import React from "react";
import PixaState from "./Context/PixaState";
import Images from "./components/Images";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <PixaState>
      <Navbar />
      <Images />
    </PixaState>
  );
};

export default App;
