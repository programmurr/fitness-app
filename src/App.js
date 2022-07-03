import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";
import Workout from "./pages/Workout";
import NotFound from "./pages/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="workout" element={<Workout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1 className="home-header">MurrFit</h1>
      <Link to="/workout" className="start-workout-link">
        Start Workout
      </Link>
    </>
  );
}

export default App;
