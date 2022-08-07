import formStyles from "../styles/forms.module.css";
export default function SelectExercise({ exercise, exercisesByBodyPart, handleChange }) {
    return (<div className="select-exercise-container">
      <div className={formStyles.selectWrapper}>
        <label className={formStyles.selectLabel}>Select exercise</label>
        <select className={formStyles.selectInput} value={exercise} onChange={(e) => handleChange("name", e.target.value)}>
          <option value="select">Select</option>
          {exercisesByBodyPart.map((exercise, index) => (<option value={exercise.name} key={`${exercise.name}${index}`}>
              {exercise.name}
            </option>))}
        </select>
      </div>
    </div>);
}
