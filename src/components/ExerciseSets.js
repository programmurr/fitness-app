import { useReducer } from "react";
import exerciseReducer from "../reducer/exerciseReducer";

export default function ExerciseSets() {
  const [sets, dispatch] = useReducer(exerciseReducer, "1");
  return (
    <div className="sets-container">
      <label>Sets</label>
      <input
        type="number"
        min="1"
        value={sets}
        onChange={(e) => dispatch({ type: "sets", payload: e.target.value })}
      />
    </div>
  );
}
