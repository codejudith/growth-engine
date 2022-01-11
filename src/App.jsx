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
        <button onClick={() => setNeutron("404")}>404</button>
        <button onClick={() => setNeutron("fail")}>Fail</button>
        <button onClick={() => setNeutron("alert")}>Alert</button>
        <button onClick={() => setNeutron("success")}>Success</button>
        <button onClick={() => setNeutron("question")}>Question</button>
      </div>
      <Neutron track={neutron} />
    </div>
  );
}
