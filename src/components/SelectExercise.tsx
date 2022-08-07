import formStyles from "../styles/forms.module.css";
import { Exercise } from '../typescript/interfaces'

interface SelectExerciseProps {
  exercise: string;
  exercisesByBodyPart: Exercise[];
  handleChange: (detail: string, value: string) => void;
}

export default function SelectExercise ({
  exercise, 
  exercisesByBodyPart, 
  handleChange
}: SelectExerciseProps) {
  return (
    <div className="select-exercise-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Select exercise</label>
        <select
          className={formStyles.selectInput}
          value={exercise}
          onChange={(e) => handleChange("name", e.target.value)}
        >
          <option value="select">Select</option>
          {exercisesByBodyPart.map((exercise, index: number) => (
            <option value={exercise.name} key={`${exercise.name}${index}`}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
