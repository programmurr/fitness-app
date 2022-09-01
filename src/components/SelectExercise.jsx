import formStyles from "../styles/forms.module.css";
export default function SelectExercise({ exercise, exercisesByBodyPart, handleChange }) {
    return (<div className="select-exercise-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel} htmlFor="selectExercise">Select exercise</label>
        <select id="selectExercise" className={formStyles.selectInput} value={exercise} onChange={(e) => handleChange("name", e.target.value)}>
          <option value="select" aria-label="default-exercise">Select</option>
          {exercisesByBodyPart.map((exercise, index) => (<option value={exercise.name} key={`${exercise.name}${index}`}>
              {exercise.name}
            </option>))}
        </select>
      </div>
    </div>);
}
