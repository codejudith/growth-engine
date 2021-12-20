import Neutron from "./Neutron";
import { useEffect, useState } from "react";

export default function App() {
  const [neutron, setNeutron] = useState("loading");

  return (
    <div className="App">
      <h1>Neutron</h1>
      <p>Choose a animation state</p>
      <div className="controls">
        <button onClick={() => setNeutron("quiz")}>Quiz</button>
        <button onClick={() => setNeutron("pdf")}>PDF</button>
        <button onClick={() => setNeutron("loading")}>Loading</button>
      </div>
      <Neutron track={neutron} />
    </div>
  );
}
