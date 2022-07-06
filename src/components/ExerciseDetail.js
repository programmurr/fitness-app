import SelectExercise from "./SelectExercise";
import ExerciseSets from "./ExerciseSets";
import ExerciseReps from "./ExerciseReps";
import ExerciseWeight from "./ExerciseWeight";
import ExerciseNote from "./ExerciseNote";
import styles from "../styles/exercise-container.module.css";
import formStyles from "../styles/forms.module.css";

export default function ExerciseDetail(props) {
  const { exercise } = props;

  // TODO:
  // Verify only numbers in number boxes
  // Filter exercises by typing
  return (
    <div className={styles.exerciseContainer}>
      <SelectExercise
        exercise={exercise.name}
        exercisesByBodyPart={props.exercisesByBodyPart}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseSets
        sets={exercise.sets}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseReps
        reps={exercise.reps}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseWeight
        weight={exercise.weight}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseNote
        note={exercise.note}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <div className={styles.addButtonContainer}>
        <button
          className={formStyles.workoutButton}
          onClick={props.handleAddExercise}
        >
          Add Exercise
        </button>
      </div>
    </div>
  );
}
