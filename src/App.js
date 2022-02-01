import { useState } from "react";

import { generate } from "./lib/kataGenerator";

import "./App.css";

function App() {
  const [isStart, setIsStart] = useState(true);
  const [kata, setKata] = useState("");

  function randomizeKata() {
    if (isStart) {
      setIsStart(false);
    }
    const newKata = generate().join(" for ");
    setKata(newKata);
  }

  return (
    <div className="App">
      <div className="main-container">
        <nav>
          <a href="/" className="skillgrid">
            <em>skillgrid</em>
          </a>
        </nav>
        <header>
          <h1 className="main-title">
            {isStart ? "Game design katas to improve your skills" : kata}
          </h1>
        </header>
        <main>
          <p>
            <button className="shuffle-button" onClick={randomizeKata}>
              <span className="shuffle-text">
                {isStart ? "Show me!" : "New kata"}
              </span>
              <span>&#xa0;{isStart ? "→" : "↺"}</span>
            </button>
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
