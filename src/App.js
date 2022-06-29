import { Routes, Route, Link } from "react-router-dom";
import "./styles/app.css";
import StartWorkout from "./pages/startWorkout";
import NotFound from "./pages/404";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="start-workout" element={<StartWorkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <>
      <h1 className="home-header">MurrFit</h1>
      <Link to="/start-workout" className="start-workout-link">
        Start Workout
      </Link>
    </>
  );
}

export default App;
