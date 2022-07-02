import { useReducer } from "react";
import exerciseReducer from "../reducer/exerciseReducer";

export default function ExerciseWeight() {
  const [weight, dispatch] = useReducer(exerciseReducer, "");
  return (
    <div className="weight-container">
      <label>Weight</label>
      <input
        type="number"
        min="0"
        value={weight}
        onChange={(e) => dispatch({ type: "weight", payload: e.target.value })}
      />
      <span>KG</span>
    </div>
  );
}
