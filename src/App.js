import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <nav>
          <a href="/" className="skillgrid">
            <em>skillgrid</em>
          </a>
        </nav>
        <header>
          <h1>Game design katas to improve your skills!</h1>
        </header>
        <main>
          <p>
            <button className="shuffle-button">
              <span className="shuffle-text">Show me</span>
              <span>&#xa0;&#8594;</span>
            </button>
          </p>
        </main>
      </div>
    </div>
  );
}

export default App;
