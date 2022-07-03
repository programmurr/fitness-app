import SelectExercise from "./SelectExercise";
import ExerciseSets from "./ExerciseSets";
import ExerciseReps from "./ExerciseReps";
import ExerciseWeight from "./ExerciseWeight";
import ExerciseNote from "./ExerciseNote";
import { useState } from "react";

export default function ExerciseDetail(props) {
  const [exerciseDetails, setExerciseDetails] = useState({
    name: "Select",
    sets: "1",
    reps: "1",
    weight: "",
    note: "",
  });

  function handleDetailChange(detail, value) {
    setExerciseDetails({
      ...exerciseDetails,
      [detail]: value,
    });
  }

  // TODO: Verify only numbers in number boxes
  return (
    <div className="exercise-container">
      <SelectExercise
        exercise={exerciseDetails.exercise}
        exercisesByBodyPart={props.exercisesByBodyPart}
        handleChange={handleDetailChange}
      />
      <ExerciseSets
        sets={exerciseDetails.sets}
        handleChange={handleDetailChange}
      />
      <ExerciseReps
        reps={exerciseDetails.reps}
        handleChange={handleDetailChange}
      />
      <ExerciseWeight
        weight={exerciseDetails.weight}
        handleChange={handleDetailChange}
      />
      <ExerciseNote
        note={exerciseDetails.note}
        handleChange={handleDetailChange}
      />
      <div className="add-exercise-container">
        <button
          className="add-exercise-button"
          onClick={() => props.handleAddExercise(exerciseDetails)}
        >
          +
        </button>
      </div>
    </div>
  );
}
