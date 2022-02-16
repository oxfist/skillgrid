import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";

import useBoop from "./hooks/useBoop";
import { generate } from "./lib/kataGenerator";

import "./App.css";

function KataPage({ welcomeMessage, buttonText }) {
  const [isStart, setIsStart] = useState(true);
  const [kata, setKata] = useState("");
  const [style, triggerBoop] = useBoop({ x: isStart ? 5 : 0 });
  const headerAnimationProps = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 60 },
    config: {
      tension: 300,
      friction: 20,
    },
  });

  function randomizeKata() {
    if (isStart) {
      setIsStart(false);
    }
    const newKata = generate().join(" for ");
    setKata(newKata);
  }

  useEffect(() => {
    let intervalId;
    const timeoutId = window.setTimeout(() => {
      triggerBoop();

      intervalId = window.setInterval(() => {
        triggerBoop();
      }, 5000);
    }, 2000);

    return () => {
      window.clearTimeout(timeoutId);
      window.clearInterval(intervalId);
    };
  }, [triggerBoop]);

  return (
    <section>
      <header>
        <animated.h1 style={headerAnimationProps} className="main-title">
          {isStart ? welcomeMessage : kata}
        </animated.h1>
      </header>
      <p>
        <button className="shuffle-button" onClick={randomizeKata}>
          {isStart ? (
            <>
              <span className="shuffle-text">{buttonText}</span>
              <animated.span style={style}>&#xa0;{"→"}</animated.span>
            </>
          ) : (
            <>
              <span className="shuffle-text">New Kata</span>
              <span>&#xa0;{"↺"}</span>
            </>
          )}
        </button>
      </p>
    </section>
  );
}

export default KataPage;
