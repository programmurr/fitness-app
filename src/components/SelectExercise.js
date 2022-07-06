import formStyles from "../styles/forms.module.css";

export default function SelectExercise(props) {
  return (
    <div className="select-exercise-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Select exercise</label>
        <select
          className={formStyles.selectInput}
          value={props.exercise}
          onChange={(e) => props.handleChange("name", e.target.value)}
        >
          <option value="select">Select</option>
          {props.exercisesByBodyPart.map((exercise, index) => (
            <option value={exercise.name} key={`${exercise.name}${index}`}>
              {exercise.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
