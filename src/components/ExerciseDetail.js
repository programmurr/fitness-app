import SelectExercise from "./SelectExercise";
import ExerciseInput from "./ExerciseInput";
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
      <ExerciseInput
        label="sets"
        inputType="number"
        value={exercise.sets}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="reps"
        inputType="number"
        value={exercise.reps}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="weight"
        inputType="number"
        value={exercise.weight}
        handleChange={(detail, value) =>
          props.handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="note"
        inputType="text"
        value={exercise.note}
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
