import { useReducer } from "react";
import exerciseReducer from "../reducer/exerciseReducer";

export default function SelectExercise(props) {
  const [exercise, dispatch] = useReducer(exerciseReducer, "Select");

  return (
    <div className="select-exercise-container">
      <label>Select exercise</label>
      <select
        value={exercise}
        onChange={(e) =>
          dispatch({ type: "exercise", payload: e.target.value })
        }
      >
        <option value="select">Select</option>
        {props.exercisesByBodyPart.map((exercise, index) => (
          <option value={exercise.name} key={`${exercise.name}${index}`}>
            {exercise.name}
          </option>
        ))}
      </select>
    </div>
  );
}
