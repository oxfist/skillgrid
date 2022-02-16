import KataPage from "./KataPage";

import "./App.css";
import { Route, Routes } from "react-router-dom";

const TEXTS = {
  base: {
    welcomeMessage: "Game Design Katas to Improve Your Skills",
    buttonText: "Show Me!",
  },
  clmn: {
    welcomeMessage: "Katas de game design para regalar",
    buttonText: "¡A verrr!",
  },
};
Object.freeze(TEXTS);

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <KataPage
              welcomeMessage={TEXTS.base.welcomeMessage}
              buttonText={TEXTS.base.buttonText}
            />
          }
        />
        <Route
          path="/clmn"
          element={
            <KataPage
              welcomeMessage={TEXTS.clmn.welcomeMessage}
              buttonText={TEXTS.clmn.buttonText}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
