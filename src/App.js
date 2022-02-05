import { useState } from "react";
import { useSpring, animated } from "react-spring";

import useBoop from "./hooks/useBoop";
import { generate } from "./lib/kataGenerator";

import "./App.css";

function App() {
  const [isStart, setIsStart] = useState(true);
  const [kata, setKata] = useState("");
  const [style, trigger] = useBoop({ x: isStart ? 5 : 0 });
  const animationProps = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 50 },
    config: {
      tension: 300,
      friction: 15,
    },
  });

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
          <animated.h1 style={animationProps} className="main-title">
            {isStart ? "Game Design Katas to Improve Your Skills" : kata}
          </animated.h1>
        </header>
        <main>
          <p onMouseEnter={trigger}>
            <button className="shuffle-button" onClick={randomizeKata}>
              <span className="shuffle-text">
                {isStart ? "Show Me!" : "New Kata"}
              </span>
              <animated.span style={style}>
                &#xa0;{isStart ? "→" : "↺"}
              </animated.span>
            </button>
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
