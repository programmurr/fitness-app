import SelectExercise from "./SelectExercise.jsx";
import ExerciseInput from "./ExerciseInput";
import styles from "../styles/exercise-container.module.css";
import formStyles from "../styles/forms.module.css";
import { LiveExercise, Exercise } from '../typescript/interfaces';

interface ExerciseDetailProps {
  exercise: LiveExercise;
  exercisesByBodyPart: Exercise[];
  handleDetailChange: (detail: string, value: string, id: string) => void;
  handleAddExercise: () => void;
}


export default function ExerciseDetail({
  exercise,
  exercisesByBodyPart,
  handleDetailChange,
  handleAddExercise
}: ExerciseDetailProps) {
  return (
    <div className={styles.exerciseContainer}>
      <SelectExercise
        exercise={exercise.name}
        exercisesByBodyPart={exercisesByBodyPart}
        handleChange={(detail, value) =>
          handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="sets"
        inputType="number"
        value={exercise.sets}
        handleChange={(detail, value) =>
          handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="reps"
        inputType="number"
        value={exercise.reps}
        handleChange={(detail, value) =>
          handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="weight"
        inputType="number"
        value={exercise.weight}
        handleChange={(detail, value) =>
          handleDetailChange(detail, value, exercise.id)
        }
      />
      <ExerciseInput
        label="note"
        inputType="text"
        value={exercise.note}
        handleChange={(detail, value) =>
          handleDetailChange(detail, value, exercise.id)
        }
      />
      <div className={styles.addButtonContainer}>
        <button
          className={formStyles.workoutButton}
          onClick={handleAddExercise}
        >
          Add Exercise
        </button>
      </div>
    </div>
  );
}
