import { useReducer } from "react";
import exerciseReducer from "../reducer/exerciseReducer";

export default function ExerciseReps() {
  const [reps, dispatch] = useReducer(exerciseReducer, "1");

  return (
    <div className="reps-container">
      <label>Reps</label>
      <input
        type="number"
        min="1"
        value={reps}
        onChange={(e) => dispatch({ type: "reps", payload: e.target.value })}
      />
    </div>
  );
}
