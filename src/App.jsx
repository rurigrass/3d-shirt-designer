import { useState } from "react";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";
import Canvas from "./canvas";

function App() {
  return (
    <main className="app transition-all ease-in">
      {/* <h1 className="head-text">Ela malaka</h1> */}
      <Home />
      {/* <Canvas /> */}
      <Customizer />
    </main>
  );
}

export default App;
