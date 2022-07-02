import { useReducer } from "react";
import exerciseReducer from "../reducer/exerciseReducer";

export default function ExerciseNote() {
  const [note, dispatch] = useReducer(exerciseReducer, "");

  return (
    <div className="note-container">
      <label>Note</label>
      <input
        type="text"
        value={note}
        onChange={(e) => dispatch({ type: "note", payload: e.target.value })}
      />
    </div>
  );
}
