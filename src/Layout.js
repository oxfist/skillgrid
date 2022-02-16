import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="App">
      <div className="main-container">
        <nav>
          <a href="/" className="skillgrid">
            <em>skillgrid</em>
          </a>
        </nav>
        {children}
      </div>
    </div>
  );
}

export default Layout;
