import { Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <p>
              open web: <a href="https://rwd.lol">rwd.lol</a>
            </p>
          }
        />
      </Routes>
    </div>
  );
}
